import express from 'express';
import asyncHandler from 'express-async-handler';

import {
  getHoursController,
  postWorkshiftController,
  delKebabstandController,
} from '../controllers/test.js';

const router = express.Router();

router.get('/getHours', asyncHandler(getHoursController));
router.post('/postWorkshift', asyncHandler(postWorkshiftController));
router.delete('/delWorkshift/:id', asyncHandler(delKebabstandController));

export default router;
