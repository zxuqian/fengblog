import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDTO: CreateUserDTO): Promise<User> {
    return this.usersService.create(createUserDTO);
  }
}
