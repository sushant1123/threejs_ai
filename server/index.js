import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

import dallERoutes from "./routes/dalle.routes.js";

const port = process.env.PORT || 8080;
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "hello from DALL-E" });
});

app.use("/api/v1/dalle", dallERoutes);

app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});
