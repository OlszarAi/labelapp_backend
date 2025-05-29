import express, { Router } from 'express';
import {
  getFabricCanvasById,
  createFabricCanvas,
  updateFabricCanvas,
  deleteFabricCanvas,
  duplicateFabricCanvas
} from '../../controllers/fabric/fabricCanvasController';
import { authenticate } from '../../middleware/authMiddleware';

const router: Router = express.Router();

// Apply auth middleware to all routes
router.use(authenticate);

// Fabric Canvas routes
router.get('/:id', getFabricCanvasById);           // GET /api/fabric/canvas/:id
router.post('/', createFabricCanvas);              // POST /api/fabric/canvas
router.put('/:id', updateFabricCanvas);            // PUT /api/fabric/canvas/:id
router.delete('/:id', deleteFabricCanvas);         // DELETE /api/fabric/canvas/:id
router.post('/:id/duplicate', duplicateFabricCanvas); // POST /api/fabric/canvas/:id/duplicate

export default router;
