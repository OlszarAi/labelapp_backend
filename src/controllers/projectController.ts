import { Request, Response } from 'express';
import { prisma } from '../index';

// Get all projects
export const getAllProjects = async (req: Request, res: Response) => {
  try {
    const projects = await prisma.project.findMany({
      include: {
        label: {
          include: {
            elements: true
          }
        }
      }
    });
    res.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ message: 'Error fetching projects', error });
  }
};

// Get a single project by ID
export const getProjectById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const project = await prisma.project.findUnique({
      where: { id },
      include: {
        label: {
          include: {
            elements: true
          }
        }
      }
    });

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json(project);
  } catch (error) {
    console.error('Error fetching project:', error);
    res.status(500).json({ message: 'Error fetching project', error });
  }
};

// Create a new project with a label
export const createProject = async (req: Request, res: Response) => {
  try {
    const { name, label } = req.body;

    const newProject = await prisma.project.create({
      data: {
        name,
        label: {
          create: {
            name: label.name,
            width: label.width,
            height: label.height,
            elements: {
              create: (label.elements || []).map((element: any) => ({
                type: element.type,
                x: element.x,
                y: element.y,
                width: element.width,
                height: element.height,
                size: element.size,
                value: element.value,
                color: element.color,
                rotation: element.rotation || 0,
                properties: element.properties || {}
              }))
            }
          }
        }
      },
      include: {
        label: {
          include: {
            elements: true
          }
        }
      }
    });

    res.status(201).json(newProject);
  } catch (error) {
    console.error('Error creating project:', error);
    res.status(500).json({ message: 'Error creating project', error });
  }
};

// Update an existing project
export const updateProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, label } = req.body;

    // First check if the project exists
    const projectExists = await prisma.project.findUnique({
      where: { id },
      include: { label: true }
    });

    if (!projectExists) {
      return res.status(404).json({ message: 'Project not found' });
    }

    // Update the project's name
    const updatedProject = await prisma.project.update({
      where: { id },
      data: {
        name
      }
    });

    // Update the associated label
    if (label) {
      const labelId = projectExists.labelId;
      
      // Delete all existing elements and recreate them
      await prisma.labelElement.deleteMany({
        where: { labelId }
      });

      await prisma.label.update({
        where: { id: labelId },
        data: {
          name: label.name,
          width: label.width,
          height: label.height,
          elements: {
            create: (label.elements || []).map((element: any) => ({
              type: element.type,
              x: element.x,
              y: element.y,
              width: element.width,
              height: element.height,
              size: element.size,
              value: element.value,
              color: element.color,
              rotation: element.rotation || 0,
              properties: element.properties || {}
            }))
          }
        }
      });
    }

    // Fetch the updated project with all its related data
    const result = await prisma.project.findUnique({
      where: { id },
      include: {
        label: {
          include: {
            elements: true
          }
        }
      }
    });

    res.json(result);
  } catch (error) {
    console.error('Error updating project:', error);
    res.status(500).json({ message: 'Error updating project', error });
  }
};

// Delete a project
export const deleteProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Check if the project exists
    const projectExists = await prisma.project.findUnique({
      where: { id }
    });

    if (!projectExists) {
      return res.status(404).json({ message: 'Project not found' });
    }

    // Delete the project (label will need to be deleted separately if needed)
    await prisma.project.delete({
      where: { id }
    });

    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    console.error('Error deleting project:', error);
    res.status(500).json({ message: 'Error deleting project', error });
  }
};