import express from 'express';
import asyncHandler from 'express-async-handler';

import {
  test,
  getHoursController,
  postWorkshiftController,
} from '../controllers/test.js';

const router = express.Router();

router.get('/test', asyncHandler(test));
router.get('/getHours', asyncHandler(getHoursController));
router.post('/postWorkshift', asyncHandler(postWorkshiftController));

export default router;
