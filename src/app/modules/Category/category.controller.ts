import { CategoryServices } from './category.services';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { TCategory } from './category.interface';

const createCategory = catchAsync(async (req, res) => {
  const result = await CategoryServices.createCategoryIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category added successfully',
    data: result
  });
});

const getAllCategorys = catchAsync(async (req, res) => {
  const result = await CategoryServices.getAllCategorysFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Categorys retrieved successfully',
    data: result
  });
});

const getSingleCategory = catchAsync(async (req, res) => {
  const { categoryId } = req.params;
  const result = await CategoryServices.getSingleCategoryFromDB(categoryId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category retrieved successfully',
    data: result
  });
});

const updateCategory = catchAsync(async (req, res) => {
  const { categoryId } = req.params;
  const categoryData: Partial<TCategory> = req.body;
  const result = await CategoryServices.updateCategoryFromDB(categoryId, categoryData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category updated successfully',
    data: result
  });
});

const deleteCategory = catchAsync(async (req, res) => {
  const { categoryId } = req.params;
  const result = await CategoryServices.deleteCategoryFromDB(categoryId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category deleted successfully',
    data: result
  });
});

export const CategoryControllers = {
  getAllCategorys,
  createCategory,
  getSingleCategory,
  updateCategory,
  deleteCategory,
};
