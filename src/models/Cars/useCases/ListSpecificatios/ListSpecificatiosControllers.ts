import type { Request, Response } from "express";

import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

class ListSpecificationsControlles {
  constructor(
    private readonly listSpecificationsUseCase: ListSpecificationsUseCase
  ) {}

  handle(request: Request, response: Response) {
    const allSpecificatios = this.listSpecificationsUseCase.execute();

    return response.status(200).json(allSpecificatios);
  }
}

export { ListSpecificationsControlles };
