import { User } from "../../users/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Post } from "src/posts/entities/post.entity";
import { Exclude } from "class-transformer";

@Entity()
export class Comment {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  content: string;

  @Column({default: false})
  isApproved: boolean;

  @Exclude()
  @ManyToOne(() => User)
  user: User;

  @Exclude()
  @ManyToOne(() => Post)
  post: Post;

  @CreateDateColumn()
  createdAt: Date;

  @Exclude()
  @UpdateDateColumn()
  updatedAt: Date;
  
}
