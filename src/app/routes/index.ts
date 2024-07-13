import { Router } from 'express';
import { ProductRoutes } from '../modules/Product/product.routes';
import { CategoryRoutes } from '../modules/Category/category.routes';
import { OrderRoutes } from '../modules/Order/order.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/category',
    route: CategoryRoutes,
  },
  {
    path: '/products',
    route: ProductRoutes,
  },
  {
    path: '/order',
    route: OrderRoutes,
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;