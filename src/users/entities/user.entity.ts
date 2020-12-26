import { Exclude } from "class-transformer";
// import { Post } from "../../posts/entities/post.entity";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: "person"})
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  username: string;

  @Exclude()
  @Column()
  password: string;

  @Column({nullable: true})
  mobilePhone: string;

  @Column({nullable: true})
  email: string;

  @Column({nullable: true})
  wechat: string;

  @Column({nullable: true})
  github: string;

  @Column({nullable: true})
  avatar: string;

  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
