import express from 'express';
import { CategoryControllers } from './category.controller';
import validateRequest from '../../middleware/validateRequest';
import categoryValidationSchema from './category.validation';

const router = express.Router();

router.get('/', CategoryControllers.getAllCategorys);

router.post('/', validateRequest(categoryValidationSchema), CategoryControllers.createCategory);

router.get('/:categoryId', CategoryControllers.getSingleCategory);

router.put('/:categoryId', CategoryControllers.updateCategory);

router.delete('/:categoryId', CategoryControllers.deleteCategory);

export const CategoryRoutes = router;