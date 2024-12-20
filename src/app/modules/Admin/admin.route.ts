import express from 'express';
import validateRequest from '../../midlewares/validateRequest';
import { AdminControllers } from './admin.controller';
import { updateAdminValidationSchema } from './admin.validation';
import auth from '../../midlewares/auth';

const router = express.Router();

router.get('/:id', AdminControllers.getSingleAdmin);

router.patch(
  '/:id',
  validateRequest(updateAdminValidationSchema),
  AdminControllers.updateAdmin,
);

router.delete('/:id', AdminControllers.deleteAdmin);

router.get('/', auth(), AdminControllers.getAllAdmins);

export const AdminRoutes = router;