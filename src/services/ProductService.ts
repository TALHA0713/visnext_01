import { ProductHandler } from "../handlers";
import { Exception } from "../helpers";
import { Filter } from "../interfaces/Common";
import { Product } from "../interfaces/Product";
import { ProductUtil } from "../utilities";


class ProductService {
  static async createNewProduct(product: Product): Promise<Product> {
    ProductUtil.validateUtil(product);

    const response: Product[] = await ProductHandler.findProduct({ name: product.name });

    if (response?.length) {
      throw new Exception("Product with this name already exists", 400, {
        reportError: true,
      }).toJson();
    }

    return ProductHandler.insertNewProduct(product);
  }

  static getProducts(filter: Filter): Promise<Product[]> {
    return ProductHandler.getProducts(filter);
  }

  static getAllProducts(): Promise<Product[]> {
    return ProductHandler.getAllProducts();
  }

  static async deleteProduct(id: string): Promise<Product> {
    return ProductHandler.deleteProduct(id);
  }
}

export default ProductService;
