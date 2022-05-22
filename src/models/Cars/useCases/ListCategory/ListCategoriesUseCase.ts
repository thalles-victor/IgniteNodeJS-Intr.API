import { Category } from "../../model/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoriesUseCase {
  constructor(private readonly categoriesRepositories: ICategoriesRepository) {}

  execute(): Category[] {
    const allCategories = this.categoriesRepositories.list();
    return allCategories;
  }
}

export { ListCategoriesUseCase };
