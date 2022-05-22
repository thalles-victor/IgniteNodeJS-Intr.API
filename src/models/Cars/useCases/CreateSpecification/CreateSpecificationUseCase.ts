import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from "../../repositories/ISpecificationsRepository";

class CreateSpecificationUseCase {
  constructor(
    private readonly specificationRepository: ISpecificationsRepository
  ) {}
  execute({ name, description }: ICreateSpecificationDTO) {
    return this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
