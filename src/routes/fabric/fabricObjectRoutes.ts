import express, { Router } from 'express';
import {
  getFabricObjectsByCanvas,
  getFabricObjectById,
  createFabricObject,
  updateFabricObject,
  deleteFabricObject,
  bulkFabricObjectOperations
} from '../../controllers/fabric/fabricObjectController';
import { authenticate } from '../../middleware/authMiddleware';

const router: Router = express.Router();

// Apply auth middleware to all routes
router.use(authenticate);

// Fabric Object routes
router.get('/canvas/:canvasId', getFabricObjectsByCanvas); // GET /api/fabric/objects/canvas/:canvasId
router.get('/:id', getFabricObjectById);                   // GET /api/fabric/objects/:id
router.post('/', createFabricObject);                      // POST /api/fabric/objects
router.put('/:id', updateFabricObject);                    // PUT /api/fabric/objects/:id
router.delete('/:id', deleteFabricObject);                 // DELETE /api/fabric/objects/:id
router.post('/bulk', bulkFabricObjectOperations);          // POST /api/fabric/objects/bulk

export default router;
