import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProductIntoDB = async (product: Partial<TProduct>) => {
  const result = await Product.create(product);
  return result;
};

const getAllProductsFromDB = async (searchTerm?: string) => {
  const result = await Product.find(
    searchTerm === null
      ? {}
      : {
        $or: [
          { name: { $regex: searchTerm, $options: 'i' } },
          { price: { $regex: searchTerm, $options: 'i' } },
          { category: { $regex: searchTerm, $options: 'i' } },
          { brand: { $regex: searchTerm, $options: 'i' } },
        ],
      },
  );
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findOne({ _id: id });
  return result;
};

const updateProductFromDB = async (productId: string, product: Partial<TProduct>) => {
  const result = await Product.findByIdAndUpdate(productId, product, {
    new: true,
  });
  return result;
};

const deleteProductFromDB = async (productId: string) => {
  const result = await Product.deleteOne({ _id: productId });
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateProductFromDB,
  deleteProductFromDB,
};
