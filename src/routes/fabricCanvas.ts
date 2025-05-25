/**
 * Fabric Canvas Routes
 * API routes for Fabric.js canvas operations
 */

import { Router } from 'express';
import {
  createCanvas,
  getCanvas,
  updateCanvas,
  deleteCanvas,
  getCanvasHistory,
  restoreCanvasVersion
} from '../controllers/fabricCanvasController';

const router = Router();

// Canvas CRUD operations
router.post('/canvas', createCanvas);
router.get('/canvas/:id', getCanvas);
router.put('/canvas/:id', updateCanvas);
router.delete('/canvas/:id', deleteCanvas);

// Canvas history operations
router.get('/canvas/:id/history', getCanvasHistory);
router.post('/canvas/:id/restore/:versionId', restoreCanvasVersion);

export default router;
