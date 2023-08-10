import express from 'express';
import authRouter from './auth';

const router = express.Router();

router.get('/', function (req, res, next) {
  res.send({ title: 'Show Case' });
});

router.use('/api/v1', authRouter)

export default router;
 