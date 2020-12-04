import { Exclude } from "class-transformer";
import { Post } from "../../posts/entities/post.entity";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  username: string;

  @Exclude()
  @Column()
  password: string;

  @Column()
  mobilePhone: string;

  @Column()
  email: string;

  @Column()
  wechat: string;

  @Column()
  github: string;

  @Column()
  avatar: string;

  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
