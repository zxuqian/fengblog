import { Exclude } from "class-transformer";
import { Post } from "../../posts/entities/post.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: number;
  @Column()
  username: string;

  @Exclude()
  @Column()
  password: string;
  @OneToMany(() => Post, post => post.user)
  posts: Post[]

  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
