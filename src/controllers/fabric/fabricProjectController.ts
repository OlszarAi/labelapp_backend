import { Request, Response } from 'express';
import { prisma } from '../../index';

// Get all fabric projects for the authenticated user
export const getAllFabricProjects = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    const projects = await prisma.fabricProject.findMany({
      where: {
        userId: userId
      },
      include: {
        canvases: {
          include: {
            objects: true
          }
        }
      },
      orderBy: {
        updatedAt: 'desc'
      }
    });

    res.json(projects);
  } catch (error) {
    console.error('Error fetching fabric projects:', error);
    res.status(500).json({ message: 'Error fetching fabric projects', error });
  }
};

// Get a single fabric project by ID
export const getFabricProjectById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    const project = await prisma.fabricProject.findFirst({
      where: { 
        id,
        userId: userId
      },
      include: {
        canvases: {
          include: {
            objects: true
          }
        }
      }
    });

    if (!project) {
      return res.status(404).json({ message: 'Fabric project not found' });
    }

    res.json(project);
  } catch (error) {
    console.error('Error fetching fabric project:', error);
    res.status(500).json({ message: 'Error fetching fabric project', error });
  }
};

// Create a new fabric project
export const createFabricProject = async (req: Request, res: Response) => {
  try {
    const { name, description, icon } = req.body;
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    if (!name) {
      return res.status(400).json({ message: 'Project name is required' });
    }

    const project = await prisma.fabricProject.create({
      data: {
        name,
        description,
        icon,
        userId
      },
      include: {
        canvases: true
      }
    });

    res.status(201).json(project);
  } catch (error) {
    console.error('Error creating fabric project:', error);
    res.status(500).json({ message: 'Error creating fabric project', error });
  }
};

// Update a fabric project
export const updateFabricProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, description, icon } = req.body;
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    // Verify project ownership
    const existingProject = await prisma.fabricProject.findFirst({
      where: { id, userId }
    });

    if (!existingProject) {
      return res.status(404).json({ message: 'Fabric project not found' });
    }

    const project = await prisma.fabricProject.update({
      where: { id },
      data: {
        ...(name && { name }),
        ...(description !== undefined && { description }),
        ...(icon !== undefined && { icon })
      },
      include: {
        canvases: {
          include: {
            objects: true
          }
        }
      }
    });

    res.json(project);
  } catch (error) {
    console.error('Error updating fabric project:', error);
    res.status(500).json({ message: 'Error updating fabric project', error });
  }
};

// Delete a fabric project
export const deleteFabricProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    // Verify project ownership
    const existingProject = await prisma.fabricProject.findFirst({
      where: { id, userId }
    });

    if (!existingProject) {
      return res.status(404).json({ message: 'Fabric project not found' });
    }

    // Delete the project (cascading delete will handle canvases and objects)
    await prisma.fabricProject.delete({
      where: { id }
    });

    res.json({ message: 'Fabric project deleted successfully' });
  } catch (error) {
    console.error('Error deleting fabric project:', error);
    res.status(500).json({ message: 'Error deleting fabric project', error });
  }
};
