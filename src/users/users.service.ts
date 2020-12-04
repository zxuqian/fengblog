import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt'
import { UpdateUserDto } from './dto/update-user.dto';

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
    const {password, ...createdUser} = await this.userRepository.save(user);
    return this.userRepository.save(createdUser);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    this.userRepository.update(id, updateUserDto)
  }

  remove(id: string) {
    this.userRepository.delete(id);
  }
  
}
