import cors from "cors";
import express from "express";
import swaggerUI from "swagger-ui-express";

import { router } from "./routes";
import swaggerFile from "./swagger.json";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("tmp"));

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));
app.use(router);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`🚀 Server is runnig at http://localhost:${PORT}`);
});
