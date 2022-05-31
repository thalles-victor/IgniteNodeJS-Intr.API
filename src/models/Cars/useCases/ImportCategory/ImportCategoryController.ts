import type { Request, Response } from "express";

import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
  constructor(private readonly importUseCaseService: ImportCategoryUseCase) {}

  handle(request: Request, response: Response) {
    const { file } = request;

    this.importUseCaseService.execute(file!);

    return response.send();
  }
}
export { ImportCategoryController };
