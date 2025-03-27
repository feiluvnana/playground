import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Role } from "../utils/enums";

@Entity("users")
@Index(["username"], { unique: true })
export class User {
  @PrimaryGeneratedColumn()
  declare id: number;

  @Column({ nullable: false })
  declare username: string;

  @Column({ nullable: false })
  declare password: string;

  @Column({ nullable: false, type: "enum", enum: Role, default: Role.user })
  declare role: Role;

  @CreateDateColumn({ nullable: false })
  declare createdAt: Date;

  @UpdateDateColumn({ nullable: false })
  declare updatedAt: Date;
}
