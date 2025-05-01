import { Router } from 'express';
import { getWeightPage, convertWeight } from '../controllers/weight.controller.js';

const router = Router();

router.get('/', getWeightPage);
router.post('/', convertWeight);

export default router;
