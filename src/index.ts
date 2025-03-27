import "reflect-metadata";

import express from "express";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

async function bootstrap() {
  await Promise.all(
    fs.readdirSync(path.resolve(__dirname, "./services")).map(async (file) => {
      if (file.endsWith(".ts") || file.endsWith(".js")) {
        const { init } = await import(`./services/${file}`);
        await init();
      }
    })
  );

  const app = express();
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
}

dotenv.config();
bootstrap();
