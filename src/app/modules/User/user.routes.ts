import express from 'express';
import { UserControllers } from './user.controller';
import auth from '../../middleware/auth';
import { USER_ROLE } from './user.constant';

const router = express.Router();

router.get('/me', auth(USER_ROLE.ADMIN, USER_ROLE.USER), UserControllers.getUser);

router.put('/me', auth(USER_ROLE.ADMIN, USER_ROLE.USER), UserControllers.updateUser);

export const UserRoutes = router;
