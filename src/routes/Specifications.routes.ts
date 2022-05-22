import { Router } from "express";

import { createSpecificationController } from "../models/Cars/useCases/CreateSpecification";
import { listSpecificationsControllers } from "../models/Cars/useCases/ListSpecificatios";

const specificationRoutes = Router();

specificationRoutes.get("/", (request, response) => {
  return listSpecificationsControllers.handle(request, response);
});

specificationRoutes.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});

export { specificationRoutes };
