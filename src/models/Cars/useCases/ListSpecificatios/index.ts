import { SpecificationRepository } from "../../repositories/impĺementations/SpecificationsRepository";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";
import { ListSpecificationsControlles } from "./ListSpecificatiosControllers";

const specificationRepository = SpecificationRepository.getInstance();
const listSpecificationUseCase = new ListSpecificationsUseCase(
  specificationRepository
);
const listSpecificationsControllers = new ListSpecificationsControlles(
  listSpecificationUseCase
);
export { listSpecificationsControllers };
