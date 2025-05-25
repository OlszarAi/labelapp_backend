/**
 * Canvas History Model
 * Data model for canvas history and versioning
 */

// History model interface will be defined here

export interface CanvasHistoryModel {
  id: string;
  canvasId: string;
  userId: string;
  snapshot: string; // JSON string of canvas state
  action: string; // 'create', 'update', 'delete', etc.
  timestamp: Date;
}

/**
 * History creation data
 */
export interface CreateCanvasHistoryData {
  canvasId: string;
  userId: string;
  snapshot: string;
  action: string;
}

/**
 * History query options
 */
export interface HistoryQueryOptions {
  limit?: number;
  offset?: number;
  fromDate?: Date;
  toDate?: Date;
  actions?: string[];
}

/**
 * History validation functions
 */
export const canvasHistoryValidation = {
  // Validation methods will be defined here
};
