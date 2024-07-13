import express from 'express';
import { ProductControllers } from './product.controller';
import validateRequest from '../../middleware/validateRequest';
import productValidationSchema from './product.validation';

const router = express.Router();

router.get('/', ProductControllers.getAllProducts);

router.post('/', validateRequest(productValidationSchema), ProductControllers.createProduct);

router.get('/:productId', ProductControllers.getSingleProduct);

router.put('/:productId', ProductControllers.updateProduct);

router.delete('/:productId', ProductControllers.deleteProduct);

export const ProductRoutes = router;