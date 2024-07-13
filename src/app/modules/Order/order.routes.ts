import express from 'express';
import { OrderControllers } from './order.controller';
import validateRequest from '../../middleware/validateRequest';
import orderValidationSchema from './order.validation';

const router = express.Router();

router.post('/', validateRequest(orderValidationSchema), OrderControllers.createOrder);

router.get('/', OrderControllers.getUserAllOrders);

export const OrderRoutes = router;
