import express, { Router } from 'express';
import {
  getAllProjects,
  getProjectById,
  createProject,
  createEmptyProject,
  updateProject,
  deleteProject
} from '../controllers/projectController';
import { authenticate } from '../middleware/authMiddleware';
import { 
  getLabelsForProject,
  getLabelByIdFromProject,
  createLabelInProject,
  updateLabelInProject,
  deleteLabelFromProject
} from '../controllers/labelController';

const router: Router = express.Router();

// Apply auth middleware to all routes
router.use(authenticate);

// Project routes
router.get('/', getAllProjects);
router.get('/:id', getProjectById);
router.post('/', createProject);
router.post('/empty', createEmptyProject);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);

// Nested label routes for projects
router.get('/:projectId/labels', getLabelsForProject);
router.get('/:projectId/labels/:labelId', getLabelByIdFromProject);
router.post('/:projectId/labels', createLabelInProject);
router.put('/:projectId/labels/:labelId', updateLabelInProject);
router.delete('/:projectId/labels/:labelId', deleteLabelFromProject);

export default router;