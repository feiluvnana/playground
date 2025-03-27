import path from "path";
import { DataSource } from "typeorm";

export const DBService = new DataSource({
  type: "mysql",
  url: process.env.DATABASE_URL,
  logging: true,
  entities: [path.resolve(__dirname, "../entities/*.{ts,js}"), `!${path.resolve(__dirname, "../entities/*.map")}`],
  synchronize: true,
});

export async function init() {
  try {
    await DBService.initialize();
    console.log("[DBService] Database connected.");
  } catch (error) {
    console.log("[DBService] Database connection failed: ", error);
  }
}
