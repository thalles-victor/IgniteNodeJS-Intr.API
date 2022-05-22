import type { Request, Response } from "express";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  constructor(private readonly listCategoriesUseCase: ListCategoriesUseCase) {}
  handle(request: Request, response: Response) {
    return response.status(200).json(this.listCategoriesUseCase.execute());
  }
}

export { ListCategoriesController };
