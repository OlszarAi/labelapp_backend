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
          create: elements.map((element: any) => {
            // Handle QR code vs text elements differently
            const isTextElement = ['text', 'uuidText', 'company', 'product'].includes(element.type);
            const isQrCode = element.type === 'qrCode';
            
            // Default properties for text formatting
            let properties = element.properties || {};
            
            // Ensure text formatting is properly set
            if (isTextElement) {
              properties = {
                bold: properties.bold || false, // Allow bold to be configurable for all elements
                italic: properties.italic || false,
                strikethrough: properties.strikethrough || false,
                fontFamily: properties.fontFamily || 'Arial',
                ...properties
              };
            }
            
            return {
              type: element.type,
              x: element.x,
              y: element.y,
              // For QR codes, width is the size
              width: isQrCode && element.size ? element.size : element.width,
              height: element.height,
              // Use fontSize for text elements 
              fontSize: isTextElement ? (element.fontSize || properties.fontSize || 12) : null,
              // Size field has been removed from schema
              value: element.value,
              color: element.color,
              rotation: element.rotation || 0,
              properties
            };
          })
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
          create: elements.map((element: any) => {
            // Handle QR code vs text elements differently
            const isTextElement = ['text', 'uuidText', 'company', 'product'].includes(element.type);
            const isQrCode = element.type === 'qrCode';
            
            // Default properties for text formatting
            let properties = element.properties || {};
            
            // Ensure text formatting is properly set
            if (isTextElement) {
              properties = {
                bold: properties.bold || false, // Allow bold to be configurable for all elements
                italic: properties.italic || false,
                strikethrough: properties.strikethrough || false,
                fontFamily: properties.fontFamily || 'Arial',
                ...properties
              };
            }
            
            return {
              type: element.type,
              x: element.x,
              y: element.y,
              // For QR codes, width is the size
              width: isQrCode && element.size ? element.size : element.width,
              height: element.height,
              // Use fontSize for text elements 
              fontSize: isTextElement ? (element.fontSize || properties.fontSize || 12) : null,
              // Size field has been removed from schema
              value: element.value,
              color: element.color,
              rotation: element.rotation || 0,
              properties
            };
          })
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

// PROJECT-SPECIFIC LABEL OPERATIONS

// Get all labels for a specific project
export const getLabelsForProject = async (req: Request, res: Response) => {
  try {
    const { projectId } = req.params;
    
    // Ustaw nagłówki zapobiegające cachowaniu
    res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.header('Pragma', 'no-cache');
    res.header('Expires', '0');
    
    const labels = await prisma.label.findMany({
      where: { 
        projectId 
      },
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

// Get a specific label from a project
export const getLabelByIdFromProject = async (req: Request, res: Response) => {
  try {
    const { labelId, projectId } = req.params;
    
    console.log('Requested label from backend:', { labelId, projectId });
    
    // Ustaw nagłówki zapobiegające cachowaniu
    res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.header('Pragma', 'no-cache');
    res.header('Expires', '0');
    
    const label = await prisma.label.findFirst({
      where: {
        id: labelId,
        projectId
      },
      include: {
        elements: true
      }
    });
    
    if (!label) {
      console.log('Label not found:', { labelId, projectId });
      return res.status(404).json({ message: 'Label not found' });
    }
    
    console.log('Found and returning label:', { id: label.id, name: label.name, projectId: label.projectId });
    
    res.json(label);
  } catch (error) {
    console.error('Error fetching label:', error);
    res.status(500).json({ message: 'Error fetching label', error });
  }
};

// Create a label for a specific project
export const createLabelInProject = async (req: Request, res: Response) => {
  try {
    const { projectId } = req.params;
    const { name, width, height, elements = [] } = req.body;
    
    // Create the label with direct projectId reference
    const label = await prisma.label.create({
      data: {
        name,
        width,
        height,
        projectId,
        elements: {
          create: elements.map((element: any) => {
            // Handle QR code vs text elements differently
            const isTextElement = ['text', 'uuidText', 'company', 'product'].includes(element.type);
            const isQrCode = element.type === 'qrCode';
            
            // Default properties for text formatting
            let properties = element.properties || {};
            
            // Ensure text formatting is properly set
            if (isTextElement) {
              properties = {
                bold: properties.bold || false, // Allow bold to be configurable for all elements
                italic: properties.italic || false,
                strikethrough: properties.strikethrough || false,
                fontFamily: properties.fontFamily || 'Arial',
                ...properties
              };
            }
            
            return {
              type: element.type,
              x: element.x,
              y: element.y,
              // For QR codes, width is the size
              width: isQrCode && element.size ? element.size : (element.width ?? null),
              height: element.height ?? null,
              // Use fontSize directly if available, otherwise use properties.fontSize or default
              fontSize: isTextElement ? (element.fontSize || properties.fontSize || 12) : null,
              // Keep size for backward compatibility temporarily
              value: element.value ?? null,
              color: element.color ?? null,
              rotation: element.rotation || 0,
              properties
            };
          })
        }
      },
      include: {
        elements: true
      }
    });
    
    res.status(201).json(label);
  } catch (error) {
    console.error('Error creating label in project:', error);
    res.status(500).json({ message: 'Error creating label', error });
  }
};

// Update a label in a project
export const updateLabelInProject = async (req: Request, res: Response) => {
  const { labelId, projectId } = req.params; // Zmiana z id na labelId
  const { name, width, height, elements } = req.body;

  try {
    console.log('Updating label with id:', labelId);
    console.log('Project ID:', projectId);
    console.log('Request body:', JSON.stringify(req.body, null, 2));
    
    if (!labelId) {
      console.error('Label ID is undefined or empty');
      return res.status(400).json({
        message: "Label ID is required",
      });
    }

    // Sprawdź czy etykieta istnieje w projekcie
    const label = await prisma.label.findFirst({
      where: {
        id: labelId, // Zmiana z id na labelId
        projectId,
      },
    });

    if (!label) {
      return res.status(404).json({
        message: "Label not found in this project",
      });
    }

    console.log('Found label:', label.id);

    // Jeśli aktualizujemy elementy, usuń istniejące i zastąp nowymi
    if (elements && Array.isArray(elements)) {
      try {
        // Usuń istniejące elementy
        await prisma.labelElement.deleteMany({
          where: { labelId: labelId } // Zmiana z id na labelId
        });
        
        // Zaktualizuj etykietę i dodaj nowe elementy
        const updatedLabel = await prisma.label.update({
          where: {
            id: String(labelId), // Zmiana z id na labelId
          },
          data: {
            name,
            width,
            height,
            elements: {
              create: elements.map((element: any) => {
                // Handle QR code vs text elements differently
                const isTextElement = ['text', 'uuidText', 'company', 'product'].includes(element.type);
                const isQrCode = element.type === 'qrCode';
                
                // Default properties for text formatting
                let properties = element.properties || {};

                // Log for debugging
                console.log(`Element type: ${element.type}, properties:`, properties);
                console.log(`Element data:`, JSON.stringify(element, null, 2));
                
                // Ensure text formatting is properly set
                if (isTextElement) {
                  properties = {
                    bold: properties.bold || false, // Allow bold to be configurable for all elements
                    italic: properties.italic || false,
                    strikethrough: properties.strikethrough || false,
                    fontFamily: properties.fontFamily || 'Arial',
                    ...properties
                  };
                }
                
                return {
                  type: element.type,
                  x: element.x,
                  y: element.y,
                  // For QR codes, width is the size
                  width: isQrCode && element.size ? element.size : (element.width ?? null),
                  height: element.height ?? null,
                  // Use fontSize directly if available, otherwise use properties.fontSize or default
                  fontSize: isTextElement ? (element.fontSize || properties.fontSize || 12) : null,
                  // Size field has been removed from the schema
                  value: element.value ?? null,
                  color: element.color ?? null,
                  rotation: element.rotation || 0,
                  properties
                };
              })
            }
          },
          include: {
            elements: true
          }
        });

        return res.status(200).json(updatedLabel);
      } catch (error) {
        console.error('Error updating label with elements:', error);
        throw error;
      }
    } else {
      // Jeśli nie aktualizujemy elementów, zaktualizuj tylko podstawowe pola
      try {
        const updatedLabel = await prisma.label.update({
          where: {
            id: String(labelId), // Zmiana z id na labelId
          },
          data: {
            name,
            width,
            height,
          },
          include: {
            elements: true
          }
        });

        return res.status(200).json(updatedLabel);
      } catch (error) {
        console.error('Error updating label basic fields:', error);
        throw error;
      }
    }
  } catch (error) {
    console.error("Error updating label:", error);
    return res.status(500).json({
      message: "Error updating label",
    });
  }
};

// Delete a label from a project
export const deleteLabelFromProject = async (req: Request, res: Response) => {
  try {
    const { projectId, labelId } = req.params;
    
    // Check if the label exists in this project using direct projectId reference
    const labelExists = await prisma.label.findFirst({
      where: { 
        id: labelId,
        projectId
      }
    });
    
    if (!labelExists) {
      return res.status(404).json({ message: 'Label not found in this project' });
    }
    
    // Delete the label
    await prisma.label.delete({
      where: {
        id: labelId
      }
    });
    
    res.status(200).json({ message: 'Label deleted successfully' });
  } catch (error) {
    console.error('Error deleting label from project:', error);
    res.status(500).json({ message: 'Error deleting label from project', error });
  }
};

// Get all labels in a project
export const getLabelsInProject = async (req: Request, res: Response) => {
  try {
    const { projectId } = req.params;
    
    const labels = await prisma.label.findMany({
      where: { 
        projectId 
      },
      include: {
        elements: true
      }
    });
    
    res.json(labels);
  } catch (error) {
    console.error('Error getting project labels:', error);
    res.status(500).json({ message: 'Error getting project labels', error });
  }
};