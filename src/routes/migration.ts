/**
 * Migration Routes
 * API routes for label migration operations
 */

import { Router } from 'express';
import {
  analyzeMigration,
  migrateLabel,
  rollbackMigration,
  getMigrationStatus
} from '../controllers/migrationController';

const router = Router();

// Migration operations
router.post('/analyze/:labelId', analyzeMigration);
router.post('/migrate/:labelId', migrateLabel);
router.post('/rollback/:labelId', rollbackMigration);
router.get('/status/:labelId', getMigrationStatus);

export default router;
