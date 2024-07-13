import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { AuthValidation } from './auth.validation';
import { AuthControllers } from './auth.controller';

const router = express.Router();

router.post('/signup', validateRequest(AuthValidation.signUpValidationSchema), AuthControllers.signupUser);

router.post('/login', validateRequest(AuthValidation.loginValidationSchema), AuthControllers.loginUser);

router.post('/refresh-token', validateRequest(AuthValidation.refreshTokenValidationSchema), AuthControllers.refreshToken);

export const AuthRoutes = router;
