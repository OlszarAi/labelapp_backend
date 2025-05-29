import express, { Router } from 'express';
import {
  getAllFabricProjects,
  getFabricProjectById,
  createFabricProject,
  updateFabricProject,
  deleteFabricProject
} from '../../controllers/fabric/fabricProjectController';
import { authenticate } from '../../middleware/authMiddleware';

const router: Router = express.Router();

// Apply auth middleware to all routes
router.use(authenticate);

// Fabric Project routes
router.get('/', getAllFabricProjects);           // GET /api/fabric/projects
router.get('/:id', getFabricProjectById);        // GET /api/fabric/projects/:id
router.post('/', createFabricProject);           // POST /api/fabric/projects
router.put('/:id', updateFabricProject);         // PUT /api/fabric/projects/:id
router.delete('/:id', deleteFabricProject);      // DELETE /api/fabric/projects/:id

export default router;
