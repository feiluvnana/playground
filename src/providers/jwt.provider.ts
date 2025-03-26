import jwt from "jsonwebtoken";
import { z } from "zod";
import { UserSchema } from "../generated/zod";

export class JwtProvider {
  private static secretKey = process.env.JWT_SECRET_KEY!;
  private static expiresIn = process.env.JWT_EXPIRES_IN!;

  public static async sign(payload: z.infer<typeof UserSchema>) {
    return jwt.sign(
      {
        id: payload.id,
        username: payload.username,
        createdAt: payload.createdAt,
        updatedAt: payload.updatedAt,
      },
      this.secretKey,
      { expiresIn: parseInt(this.expiresIn) },
    );
  }

  public static async verify(token: string) {
    return jwt.verify(token, this.secretKey);
  }
}
