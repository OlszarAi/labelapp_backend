import { Request, Response } from 'express';
import { prisma } from '../index';

// Get all labels
export const getAllLabels = async (req: Request, res: Response) => {
  try {
    const labels = await prisma.label.findMany({
      include: {
        elements: true
      }
    });
    res.json(labels);
  } catch (error) {
    console.error('Error fetching labels:', error);
    res.status(500).json({ message: 'Error fetching labels', error });
  }
};

// Get a single label by ID
export const getLabelById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const label = await prisma.label.findUnique({
      where: { id },
      include: {
        elements: true
      }
    });

    if (!label) {
      return res.status(404).json({ message: 'Label not found' });
    }

    res.json(label);
  } catch (error) {
    console.error('Error fetching label:', error);
    res.status(500).json({ message: 'Error fetching label', error });
  }
};

// Create a new label
export const createLabel = async (req: Request, res: Response) => {
  try {
    const { name, width, height, elements = [] } = req.body;

    const newLabel = await prisma.label.create({
      data: {
        name,
        width,
        height,
        elements: {
          create: elements.map((element: any) => ({
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
      },
      include: {
        elements: true
      }
    });

    res.status(201).json(newLabel);
  } catch (error) {
    console.error('Error creating label:', error);
    res.status(500).json({ message: 'Error creating label', error });
  }
};

// Update an existing label
export const updateLabel = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, width, height, elements } = req.body;

    // First check if the label exists
    const labelExists = await prisma.label.findUnique({
      where: { id }
    });

    if (!labelExists) {
      return res.status(404).json({ message: 'Label not found' });
    }

    // Delete all existing elements and recreate them
    // This is the simplest approach for a complete update
    await prisma.labelElement.deleteMany({
      where: { labelId: id }
    });

    const updatedLabel = await prisma.label.update({
      where: { id },
      data: {
        name,
        width,
        height,
        elements: {
          create: elements.map((element: any) => ({
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
      },
      include: {
        elements: true
      }
    });

    res.json(updatedLabel);
  } catch (error) {
    console.error('Error updating label:', error);
    res.status(500).json({ message: 'Error updating label', error });
  }
};

// Delete a label
export const deleteLabel = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Check if the label exists
    const labelExists = await prisma.label.findUnique({
      where: { id }
    });

    if (!labelExists) {
      return res.status(404).json({ message: 'Label not found' });
    }

    // Delete the label (elements will be deleted due to cascading)
    await prisma.label.delete({
      where: { id }
    });

    res.json({ message: 'Label deleted successfully' });
  } catch (error) {
    console.error('Error deleting label:', error);
    res.status(500).json({ message: 'Error deleting label', error });
  }
};