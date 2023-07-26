import { Request, Response } from 'express';
import { ErrorCodes, ErrorMessages } from '../constants';
import { Validators } from '../helpers';
import ProductService from '../services/ProductService';
import { Exception } from '../interfaces/Exception';
import { Filter } from '../interfaces/Common';

class ProductController {
  static async createNewProduct(req: Request, res: Response) {
    try {
      const data = await ProductService.createNewProduct(req.body);

      res.json({
        success: true,
        data,
      });
    } catch (err) {
      const error = err as Exception;
      
      return res
        .status(Validators.validateCode(error.code, ErrorCodes.INTERNAL_SERVER_ERROR) || ErrorCodes.INTERNAL_SERVER_ERROR)
        .json({
          success: false,
          message: error.reportError ? error.message : ErrorMessages.MESSAGES.SOMETHING_WENT_WRONG,
        });
    }
  }

  static async getProducts(req: Request, res: Response) {
    try {
      const { limit: perPage = 10, currentPage = 1 } = req.query as Filter;

      const data = await ProductService.getProducts({ currentPage, perPage });

      res.json({
        success: true,
        ...data,
      });
    } catch (err) {
      const error = err as Exception;

      return res
        .status(Validators.validateCode(error.code, ErrorCodes.INTERNAL_SERVER_ERROR) || ErrorCodes.INTERNAL_SERVER_ERROR)
        .json({
          success: false,
          message: error.reportError ? error.message : ErrorMessages.MESSAGES.SOMETHING_WENT_WRONG,
        });
    }
  }

  static async getAllProducts(req: Request, res: Response) {
    try {
      const products = await ProductService.getAllProducts();

      res.json({
        success: true,
        products,
      });
    } catch (err) {
      const error = err as Exception;

      console.log(err);
      return res
        .status(Validators.validateCode(error.code, ErrorCodes.INTERNAL_SERVER_ERROR) || ErrorCodes.INTERNAL_SERVER_ERROR)
        .json({
          success: false,
          message: error.reportError ? error.message : ErrorMessages.MESSAGES.SOMETHING_WENT_WRONG,
        });
    }
  }

  static async deleteProduct(req: Request, res: Response) {
    try {
      const data = await ProductService.deleteProduct(req.params.id);

      res.json({
        success: true,
        data,
      });
    } catch (err) {
      const error = err as Exception;
      
      return res
        .status(Validators.validateCode(error.code, ErrorCodes.INTERNAL_SERVER_ERROR) || ErrorCodes.INTERNAL_SERVER_ERROR)
        .json({
          success: false,
          message: error.reportError ? error.message : ErrorMessages.MESSAGES.SOMETHING_WENT_WRONG,
        });
    }
  }
}

export default ProductController;
