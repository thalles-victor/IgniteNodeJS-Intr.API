import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

class ListSpecificationsUseCase {
  constructor(
    private readonly specificationsRepository: ISpecificationsRepository
  ) {}

  execute() {
    const allSpecificatios = this.specificationsRepository.findAll();
    return allSpecificatios;
  }
}

export { ListSpecificationsUseCase };
