import express from "express";
import fs from "fs";
import path from "path";

async function bootstrap() {
  const serviceFolder = path.join(__dirname, "services");
  const serviceFiles = fs.readdirSync(serviceFolder);
  await Promise.all(
    serviceFiles.map(async (file) => {
      const service = await import(`${serviceFolder}/${file}`);
      await service.initialize();
    }),
  );

  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static("public"));
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
}

bootstrap();
