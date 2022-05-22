import { Router } from "express";
import type { Request, Response } from "express";
import multer from "multer";

import { createCategoryController } from "../models/Cars/useCases/CreateCategory";
import { importCategoryController } from "../models/Cars/useCases/ImportCategory";
import { listCategoriesController } from "../models/Cars/useCases/ListCategory";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

categoriesRoutes.get("/", (request: Request, response: Response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRoutes.post("/", (request: Request, response: Response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.post(
  "/import",
  upload.single("file"),
  (request: Request, response: Response) => {
    return importCategoryController.handle(request, response);
  }
);

export { categoriesRoutes };
