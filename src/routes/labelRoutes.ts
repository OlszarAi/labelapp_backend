import express, { Router } from 'express';
import { 
  getAllLabels,
  getLabelById,
  createLabel,
  updateLabel,
  deleteLabel,
  getLabelsForProject,
  getLabelByIdFromProject,
  createLabelInProject,
  updateLabelInProject,
  deleteLabelFromProject
} from '../controllers/labelController';

const router: Router = express.Router();

// General label routes
router.get('/', getAllLabels);
router.get('/:id', getLabelById);
router.post('/', createLabel);
router.put('/:id', updateLabel);
router.delete('/:id', deleteLabel);

// Project-specific label routes
router.get('/projects/:projectId/labels', getLabelsForProject);
router.get('/projects/:projectId/labels/:labelId', getLabelByIdFromProject);
router.post('/projects/:projectId/labels', createLabelInProject);
router.put('/projects/:projectId/labels/:labelId', updateLabelInProject);
router.delete('/projects/:projectId/labels/:labelId', deleteLabelFromProject);

export default router;