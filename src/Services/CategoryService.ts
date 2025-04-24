import { Category } from "../Models/Category";

export const createCategory = async (name: string) => {
  const category = new Category({ name });
  return await category.save();
};

export const listCategories = async () => {
  return await Category.find();
};
