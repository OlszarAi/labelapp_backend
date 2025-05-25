/**
 * Fabric Object Model
 * Data model for individual Fabric.js objects
 */

// Object model interface will be defined here

export interface FabricObjectModel {
  id: string;
  canvasId: string;
  objectData: string; // JSON string of Fabric.js object
  objectType: string; // 'text', 'rect', 'circle', 'image', etc.
  zIndex: number;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Object creation data
 */
export interface CreateFabricObjectData {
  canvasId: string;
  objectData: string;
  objectType: string;
  zIndex: number;
}

/**
 * Object update data
 */
export interface UpdateFabricObjectData {
  objectData?: string;
  objectType?: string;
  zIndex?: number;
}

/**
 * Object validation functions
 */
export const fabricObjectValidation = {
  // Validation methods will be defined here
};
