import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

  async findOne(username: string): Promise<User | undefined> {
    return this.userRepository.findOne({where: {
      username
    }});
  }

  async create(createUserDTO: CreateUserDTO): Promise<User> {
    const user = this.userRepository.create({
      ...createUserDTO,
      password: await bcrypt.hash(createUserDTO.password, 10)
    })
    return this.userRepository.save(user);
  }
  
}
