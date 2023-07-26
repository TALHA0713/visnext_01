import mongoose from "mongoose";
import Product from "../models/Product"
import { Product as ProductType } from "../interfaces/Product";

class ProductHandler {
  static insertNewProduct(product: ProductType): Promise<any> {
    const newProduct = new Product({ 
      ...product, 
      _id: new mongoose.Types.ObjectId(),
      discount_type: product.discount_type || 'percentage' 
    });

    return newProduct.save();
  }

  static findProduct(option = {}): Promise<ProductType[]> {
    return Product.find(option)
  }

  static insertManyProducts(products: ProductType[]) {
    return Product.insertMany(products)
  }

  static getProducts({ perPage = 10, currentPage = 0 }): Promise<ProductType[]> {
    return Product.find({}, { page: currentPage, limit: perPage });
  }

  static getAllProducts(): Promise<ProductType[]> {
    return Product.find({});
  }

  static deleteProduct(productId: string): Promise<any> {
    return Product.deleteOne({ _id: new mongoose.Types.ObjectId(productId)});
  }
}

export default ProductHandler;
