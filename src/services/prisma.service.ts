import { PrismaClient } from "@prisma/client";

export const PrismaService = new PrismaClient({
  omit: { user: { password: true } },
});

export async function initialize() {
  await PrismaService.$connect()
    .then(() => {
      console.log(`[PrismaService] Connected to database.`);
    })
    .catch((err: Error) => {
      console.error(`[PrismaService] Error connecting to database: ${err}`);
    });
}
