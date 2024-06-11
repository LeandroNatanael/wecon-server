import express from 'express';
import valueAlarmController from "../controllers/valueAlarmController.js"
import getTokenController from '../controllers/getTokenController.js';
import monitorController from '../controllers/monitorController.js';
const router = express.Router();


router.post('/token', getTokenController)
router.post('/valueAlarm', valueAlarmController);
router.get('/getData',monitorController);

export default router;