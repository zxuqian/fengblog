import { User } from "../../users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Comment {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  content: string;

  @ManyToOne(() => User)
  user: User;
  
}
