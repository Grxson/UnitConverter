import { Router } from 'express';
import { getTemperaturePage, convertTemperature } from '../controllers/temperature.controller.js';

const router = Router();

router.get('/', getTemperaturePage);
router.post('/', convertTemperature);

export default router;
