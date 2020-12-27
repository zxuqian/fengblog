import {IsNotEmpty} from "class-validator";

export class CreateUserDTO {
  username: string;
  
  @IsNotEmpty()
  password: string;
}