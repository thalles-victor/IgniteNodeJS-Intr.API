import fs from "fs";

class ImportCategoryUseCase {
  execute(file: Express.Multer.File) {
    const stream = fs.createReadStream(file.path);
  }
}
export { ImportCategoryUseCase };
