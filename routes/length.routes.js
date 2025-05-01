import { Router } from 'express';
import { getLengthPage, convertLength } from '../controllers/length.controller.js';

const router = Router();

router.get('/', getLengthPage);
router.post('/', convertLength);

export default router;
