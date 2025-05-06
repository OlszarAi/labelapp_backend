import { Request, Response } from 'express';
import { prisma } from '../index';

// Get all projects
export const getAllProjects = async (req: Request, res: Response) => {
  try {
    // Get user ID from the request (set by auth middleware)
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    const projects = await prisma.project.findMany({
      where: {
        userId: userId
      },
      include: {
        labels: {
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
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    const project = await prisma.project.findFirst({
      where: { 
        id,
        userId: userId
      },
      include: {
        labels: {
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
    const { name, icon, description, label } = req.body;
    const userId = req.user?.id;
    
    if (!userId) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    // Create the project with connected label
    const newProject = await prisma.project.create({
      data: {
        name,
        icon,
        description,
        userId,
        labels: {
          create: {
            name: label ? label.name : name,
            width: label ? label.width : 90,
            height: label ? label.height : 50,
            elements: {
              create: label && label.elements ? label.elements.map((element: any) => ({
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
              })) : []
            }
          }
        }
      },
      include: {
        labels: {
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

// Create a new empty project (without labels)
export const createEmptyProject = async (req: Request, res: Response) => {
  try {
    const { name, icon, description } = req.body;
    const userId = req.user?.id;
    
    if (!userId) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    // Create project with an empty label
    const newProject = await prisma.project.create({
      data: {
        name,
        icon,
        description,
        userId,
        labels: {
          create: {
            name: name,
            width: 90,
            height: 50,
            elements: {
              create: []
            }
          }
        }
      },
      include: {
        labels: {
          include: {
            elements: true
          }
        }
      }
    });

    res.status(201).json(newProject);
  } catch (error) {
    console.error('Error creating empty project:', error);
    res.status(500).json({ message: 'Error creating empty project', error });
  }
};

// Update an existing project
export const updateProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, icon, description, label } = req.body;
    const userId = req.user?.id;
    
    if (!userId) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    // First check if the project exists and belongs to the user
    const projectExists = await prisma.project.findFirst({
      where: { 
        id,
        userId: userId
      },
      include: { 
        labels: true 
      }
    });

    if (!projectExists) {
      return res.status(404).json({ message: 'Project not found' });
    }

    // Update the project's details
    const updatedProject = await prisma.project.update({
      where: { id },
      data: {
        name,
        icon,
        description
      }
    });

    // Update the associated label if provided
    if (label && projectExists.labels && projectExists.labels.length > 0) {
      const labelId = projectExists.labels[0].id;
      
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
        labels: {
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
    const userId = req.user?.id;
    
    if (!userId) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    // Check if the project exists and belongs to the user
    const project = await prisma.project.findFirst({
      where: { 
        id,
        userId: userId
      },
      include: {
        labels: true
      }
    });

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    // Begin transaction to ensure atomicity of the deletion process
    await prisma.$transaction(async (tx) => {
      // First, delete the label elements if they exist
      if (project.labels && project.labels.length > 0) {
        for (const label of project.labels) {
          await tx.labelElement.deleteMany({
            where: { 
              labelId: label.id
            }
          });
          
          // Then delete the label
          await tx.label.delete({
            where: { 
              id: label.id 
            }
          });
        }
      }
      
      // Finally, delete the project
      await tx.project.delete({
        where: { id }
      });
    });

    res.json({ message: 'Project and all associated data deleted successfully' });
  } catch (error) {
    console.error('Error deleting project:', error);
    res.status(500).json({ message: 'Error deleting project', error });
  }
};