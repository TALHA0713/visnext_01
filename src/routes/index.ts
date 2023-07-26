import express from 'express';
import ProductController from '../controller/ProductController';

const router = express.Router();

router.get('/', function (req, res, next) {
  res.send({ title: 'Show Case' });
});

router.get('/products', ProductController.getAllProducts)

export default router;
 