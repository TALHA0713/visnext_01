import express from 'express';
import authRouter from './auth';
import { Authentication } from '../middleware';

const router = express.Router();

router.get('/', Authentication.authenticate, (req, res, next) => {
  res.send({ title: 'Show Case' });
});

router.use('/api/v1', authRouter)

export default router;
 