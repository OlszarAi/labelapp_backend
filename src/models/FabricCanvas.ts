/**
 * Fabric Canvas Model
 * Data model for Fabric.js canvas
 */

// Canvas model interface will be defined here

export interface FabricCanvasModel {
  id: string;
  projectId: string;
  labelId: string;
  canvasData: string; // JSON string of Fabric.js canvas
  version: number;
  width: number;
  height: number;
  backgroundColor?: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Canvas creation data
 */
export interface CreateFabricCanvasData {
  projectId: string;
  labelId: string;
  canvasData: string;
  width: number;
  height: number;
  backgroundColor?: string;
}

/**
 * Canvas update data
 */
export interface UpdateFabricCanvasData {
  canvasData?: string;
  width?: number;
  height?: number;
  backgroundColor?: string;
}

/**
 * Canvas validation functions
 */
export const fabricCanvasValidation = {
  // Validation methods will be defined here
};
