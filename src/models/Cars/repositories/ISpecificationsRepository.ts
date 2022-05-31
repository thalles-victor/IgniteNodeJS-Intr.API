import { Specification } from "../model/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}
interface ISpecificationsRepository {
  findAll(): Specification[];
  create({ name, description }: ICreateSpecificationDTO): void;
  findByName(name: string): Specification | undefined;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
