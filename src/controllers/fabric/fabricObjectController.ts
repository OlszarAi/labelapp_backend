import { Request, Response } from 'express';
import { prisma } from '../../index';

// Get all objects for a canvas
export const getFabricObjectsByCanvas = async (req: Request, res: Response) => {
  try {
    const { canvasId } = req.params;
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    // Verify canvas ownership through project
    const canvas = await prisma.fabricCanvas.findFirst({
      where: { 
        id: canvasId,
        project: {
          userId: userId
        }
      }
    });

    if (!canvas) {
      return res.status(404).json({ message: 'Canvas not found or access denied' });
    }

    const objects = await prisma.fabricObject.findMany({
      where: {
        canvasId: canvasId
      },
      orderBy: {
        zIndex: 'asc'
      }
    });

    res.json(objects);
  } catch (error) {
    console.error('Error fetching fabric objects:', error);
    res.status(500).json({ message: 'Error fetching fabric objects', error });
  }
};

// Get a single fabric object by ID
export const getFabricObjectById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    const object = await prisma.fabricObject.findFirst({
      where: { 
        id,
        canvas: {
          project: {
            userId: userId
          }
        }
      },
      include: {
        canvas: {
          select: {
            id: true,
            name: true,
            projectId: true
          }
        }
      }
    });

    if (!object) {
      return res.status(404).json({ message: 'Fabric object not found' });
    }

    res.json(object);
  } catch (error) {
    console.error('Error fetching fabric object:', error);
    res.status(500).json({ message: 'Error fetching fabric object', error });
  }
};

// Create a new fabric object
export const createFabricObject = async (req: Request, res: Response) => {
  try {
    const {
      type,
      canvasId,
      left,
      top,
      width,
      height,
      scaleX,
      scaleY,
      angle,
      fill,
      stroke,
      strokeWidth,
      opacity,
      text,
      fontFamily,
      fontSize,
      fontWeight,
      fontStyle,
      textAlign,
      qrValue,
      uuidLength,
      qrErrorLevel,
      zIndex,
      locked,
      visible,
      metadata
    } = req.body;
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    if (!type || !canvasId || left === undefined || top === undefined || !width || !height) {
      return res.status(400).json({ 
        message: 'Type, canvas ID, position (left, top), width, and height are required' 
      });
    }

    // Verify canvas ownership through project
    const canvas = await prisma.fabricCanvas.findFirst({
      where: { 
        id: canvasId,
        project: {
          userId: userId
        }
      }
    });

    if (!canvas) {
      return res.status(404).json({ message: 'Canvas not found or access denied' });
    }

    // Get the highest zIndex for proper layering
    const maxZIndex = await prisma.fabricObject.findFirst({
      where: { canvasId },
      orderBy: { zIndex: 'desc' },
      select: { zIndex: true }
    });

    const object = await prisma.fabricObject.create({
      data: {
        type,
        canvasId,
        left,
        top,
        width,
        height,
        scaleX: scaleX ?? 1,
        scaleY: scaleY ?? 1,
        angle: angle ?? 0,
        fill,
        stroke,
        strokeWidth: strokeWidth ?? 0,
        opacity: opacity ?? 1,
        text,
        fontFamily: fontFamily || 'Arial',
        fontSize: fontSize ?? 16,
        fontWeight: fontWeight || 'normal',
        fontStyle: fontStyle || 'normal',
        textAlign: textAlign || 'left',
        qrValue,
        uuidLength,
        qrErrorLevel: qrErrorLevel || 'M',
        zIndex: zIndex ?? (maxZIndex?.zIndex ?? 0) + 1,
        locked: locked ?? false,
        visible: visible ?? true,
        metadata: metadata || {}
      }
    });

    res.status(201).json(object);
  } catch (error) {
    console.error('Error creating fabric object:', error);
    res.status(500).json({ message: 'Error creating fabric object', error });
  }
};

// Update a fabric object
export const updateFabricObject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    // Verify object ownership through canvas and project
    const existingObject = await prisma.fabricObject.findFirst({
      where: { 
        id,
        canvas: {
          project: {
            userId: userId
          }
        }
      }
    });

    if (!existingObject) {
      return res.status(404).json({ message: 'Fabric object not found' });
    }

    // Filter out undefined values from updateData
    const filteredUpdateData = Object.fromEntries(
      Object.entries(updateData).filter(([_, value]) => value !== undefined)
    );

    const object = await prisma.fabricObject.update({
      where: { id },
      data: filteredUpdateData
    });

    res.json(object);
  } catch (error) {
    console.error('Error updating fabric object:', error);
    res.status(500).json({ message: 'Error updating fabric object', error });
  }
};

// Delete a fabric object
export const deleteFabricObject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    // Verify object ownership through canvas and project
    const existingObject = await prisma.fabricObject.findFirst({
      where: { 
        id,
        canvas: {
          project: {
            userId: userId
          }
        }
      }
    });

    if (!existingObject) {
      return res.status(404).json({ message: 'Fabric object not found' });
    }

    await prisma.fabricObject.delete({
      where: { id }
    });

    res.json({ message: 'Fabric object deleted successfully' });
  } catch (error) {
    console.error('Error deleting fabric object:', error);
    res.status(500).json({ message: 'Error deleting fabric object', error });
  }
};

// Bulk operations for fabric objects
export const bulkFabricObjectOperations = async (req: Request, res: Response) => {
  try {
    const { operations } = req.body;
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    if (!operations || !Array.isArray(operations)) {
      return res.status(400).json({ message: 'Operations array is required' });
    }

    const results: any[] = [];

    // Process operations in a transaction
    await prisma.$transaction(async (tx) => {
      for (const operation of operations) {
        const { action, id, data } = operation;

        switch (action) {
          case 'create':
            // Verify canvas ownership
            const canvas = await tx.fabricCanvas.findFirst({
              where: { 
                id: data.canvasId,
                project: { userId }
              }
            });
            if (!canvas) {
              throw new Error(`Canvas ${data.canvasId} not found or access denied`);
            }

            const created = await tx.fabricObject.create({ data });
            results.push({ action: 'create', result: created });
            break;

          case 'update':
            // Verify object ownership
            const existingUpdate = await tx.fabricObject.findFirst({
              where: { 
                id,
                canvas: { project: { userId } }
              }
            });
            if (!existingUpdate) {
              throw new Error(`Object ${id} not found or access denied`);
            }

            const updated = await tx.fabricObject.update({
              where: { id },
              data
            });
            results.push({ action: 'update', result: updated });
            break;

          case 'delete':
            // Verify object ownership
            const existingDelete = await tx.fabricObject.findFirst({
              where: { 
                id,
                canvas: { project: { userId } }
              }
            });
            if (!existingDelete) {
              throw new Error(`Object ${id} not found or access denied`);
            }

            await tx.fabricObject.delete({ where: { id } });
            results.push({ action: 'delete', id });
            break;

          default:
            throw new Error(`Unknown action: ${action}`);
        }
      }
    });

    res.json({ message: 'Bulk operations completed successfully', results });
  } catch (error: any) {
    console.error('Error in bulk fabric object operations:', error);
    res.status(500).json({ message: 'Error in bulk operations', error: error.message });
  }
};
