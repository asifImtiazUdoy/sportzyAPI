import { TCategory } from './category.interface';
import { Category } from './category.model';

const createCategoryIntoDB = async (category: Partial<TCategory>) => {
  const result = await Category.create(category);
  return result;
};

const getAllCategorysFromDB = async () => {
  const result = await Category.find({});
  return result;
};

const getSingleCategoryFromDB = async (id: string) => {
  const result = await Category.findOne({ _id: id });
  return result;
};

const updateCategoryFromDB = async (categoryId: string, category: Partial<TCategory>) => {
  const result = await Category.findByIdAndUpdate(categoryId, category, {
    new: true,
  });
  return result;
};

const deleteCategoryFromDB = async (categoryId: string) => {
  const result = await Category.deleteOne({ _id: categoryId });
  return result;
};

export const CategoryServices = {
  createCategoryIntoDB,
  getAllCategorysFromDB,
  getSingleCategoryFromDB,
  updateCategoryFromDB,
  deleteCategoryFromDB,
};
