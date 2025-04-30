import express, { Router } from 'express';
import { 
  getAllLabels,
  getLabelById,
  createLabel,
  updateLabel,
  deleteLabel
} from '../controllers/labelController';

const router: Router = express.Router();

router.get('/', getAllLabels);
router.get('/:id', getLabelById);
router.post('/', createLabel);
router.put('/:id', updateLabel);
router.delete('/:id', deleteLabel);

export default router;