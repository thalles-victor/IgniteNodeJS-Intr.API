import { DataSource } from "typeorm";

import { Category, Specification } from "../models/Cars/Entities/exports";

const dataSource = new DataSource({
  type: "postgres",
  host: "database_ignite",
  port: 5432,
  username: "docker",
  password: "ignite",
  database: "rentx",
  migrations: ["./src/database/migrations/*.ts"],
  entities: [Category, Specification],
});
async function connect() {
  if (!dataSource.isInitialized) {
    await dataSource
      .initialize()
      .then(() => console.log("Connected in database"))
      .catch((error) =>
        console.log("Error while connect in database \n", error)
      );
    return;
  }
  console.log("Connection aready exist");
}
connect();

export { dataSource };
