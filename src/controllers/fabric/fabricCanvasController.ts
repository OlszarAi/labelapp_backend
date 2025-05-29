import { Request, Response } from 'express';
import { prisma } from '../../index';

// Get a fabric canvas by ID with all objects
export const getFabricCanvasById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    const canvas = await prisma.fabricCanvas.findFirst({
      where: { 
        id,
        project: {
          userId: userId
        }
      },
      include: {
        objects: {
          orderBy: {
            zIndex: 'asc'
          }
        },
        project: {
          select: {
            id: true,
            name: true,
            userId: true
          }
        }
      }
    });

    if (!canvas) {
      return res.status(404).json({ message: 'Fabric canvas not found' });
    }

    res.json(canvas);
  } catch (error) {
    console.error('Error fetching fabric canvas:', error);
    res.status(500).json({ message: 'Error fetching fabric canvas', error });
  }
};

// Create a new fabric canvas
export const createFabricCanvas = async (req: Request, res: Response) => {
  try {
    const { name, width, height, unit, background, projectId, metadata } = req.body;
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    if (!name || !width || !height || !projectId) {
      return res.status(400).json({ 
        message: 'Canvas name, width, height, and project ID are required' 
      });
    }

    // Verify project ownership
    const project = await prisma.fabricProject.findFirst({
      where: { id: projectId, userId }
    });

    if (!project) {
      return res.status(404).json({ message: 'Project not found or access denied' });
    }

    const canvas = await prisma.fabricCanvas.create({
      data: {
        name,
        width,
        height,
        unit: unit || 'mm',
        background: background || '#ffffff',
        projectId,
        metadata: metadata || {}
      },
      include: {
        objects: true,
        project: {
          select: {
            id: true,
            name: true,
            userId: true
          }
        }
      }
    });

    res.status(201).json(canvas);
  } catch (error) {
    console.error('Error creating fabric canvas:', error);
    res.status(500).json({ message: 'Error creating fabric canvas', error });
  }
};

// Update a fabric canvas
export const updateFabricCanvas = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, width, height, unit, background, metadata, version } = req.body;
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    // Verify canvas ownership through project
    const existingCanvas = await prisma.fabricCanvas.findFirst({
      where: { 
        id,
        project: {
          userId: userId
        }
      }
    });

    if (!existingCanvas) {
      return res.status(404).json({ message: 'Fabric canvas not found' });
    }

    const updateData: any = {};
    if (name !== undefined) updateData.name = name;
    if (width !== undefined) updateData.width = width;
    if (height !== undefined) updateData.height = height;
    if (unit !== undefined) updateData.unit = unit;
    if (background !== undefined) updateData.background = background;
    if (metadata !== undefined) updateData.metadata = metadata;
    if (version !== undefined) updateData.version = version;

    const canvas = await prisma.fabricCanvas.update({
      where: { id },
      data: updateData,
      include: {
        objects: {
          orderBy: {
            zIndex: 'asc'
          }
        },
        project: {
          select: {
            id: true,
            name: true,
            userId: true
          }
        }
      }
    });

    res.json(canvas);
  } catch (error) {
    console.error('Error updating fabric canvas:', error);
    res.status(500).json({ message: 'Error updating fabric canvas', error });
  }
};

// Delete a fabric canvas
export const deleteFabricCanvas = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    // Verify canvas ownership through project
    const existingCanvas = await prisma.fabricCanvas.findFirst({
      where: { 
        id,
        project: {
          userId: userId
        }
      }
    });

    if (!existingCanvas) {
      return res.status(404).json({ message: 'Fabric canvas not found' });
    }

    // Delete the canvas (cascading delete will handle objects)
    await prisma.fabricCanvas.delete({
      where: { id }
    });

    res.json({ message: 'Fabric canvas deleted successfully' });
  } catch (error) {
    console.error('Error deleting fabric canvas:', error);
    res.status(500).json({ message: 'Error deleting fabric canvas', error });
  }
};

// Duplicate a fabric canvas
export const duplicateFabricCanvas = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    // Get the original canvas with all objects
    const originalCanvas = await prisma.fabricCanvas.findFirst({
      where: { 
        id,
        project: {
          userId: userId
        }
      },
      include: {
        objects: true
      }
    });

    if (!originalCanvas) {
      return res.status(404).json({ message: 'Fabric canvas not found' });
    }

    // Create new canvas with duplicated data
    const newCanvas = await prisma.fabricCanvas.create({
      data: {
        name: name || `${originalCanvas.name} (Copy)`,
        width: originalCanvas.width,
        height: originalCanvas.height,
        unit: originalCanvas.unit,
        background: originalCanvas.background,
        projectId: originalCanvas.projectId,
        metadata: originalCanvas.metadata as any,
        objects: {
          create: originalCanvas.objects.map(obj => ({
            type: obj.type,
            left: obj.left,
            top: obj.top,
            width: obj.width,
            height: obj.height,
            scaleX: obj.scaleX,
            scaleY: obj.scaleY,
            angle: obj.angle,
            fill: obj.fill,
            stroke: obj.stroke,
            strokeWidth: obj.strokeWidth,
            opacity: obj.opacity,
            text: obj.text,
            fontFamily: obj.fontFamily,
            fontSize: obj.fontSize,
            fontWeight: obj.fontWeight,
            fontStyle: obj.fontStyle,
            textAlign: obj.textAlign,
            qrValue: obj.qrValue,
            uuidLength: obj.uuidLength,
            qrErrorLevel: obj.qrErrorLevel,
            zIndex: obj.zIndex,
            locked: obj.locked,
            visible: obj.visible,
            metadata: obj.metadata as any
          }))
        }
      },
      include: {
        objects: {
          orderBy: {
            zIndex: 'asc'
          }
        },
        project: {
          select: {
            id: true,
            name: true,
            userId: true
          }
        }
      }
    });

    res.status(201).json(newCanvas);
  } catch (error) {
    console.error('Error duplicating fabric canvas:', error);
    res.status(500).json({ message: 'Error duplicating fabric canvas', error });
  }
};
