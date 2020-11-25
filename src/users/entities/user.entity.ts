import { Exclude } from "class-transformer";
import { Post } from "src/posts/entities/post.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  username: string;

  @Exclude()
  @Column()
  password: string;
  @OneToMany(() => Post, post => post.user)
  posts: Post[]
}
