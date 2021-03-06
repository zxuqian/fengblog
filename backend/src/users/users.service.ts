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
    return await this.userRepository.findOne({where: {
      username
    }});
  }

  async create(createUserDTO: CreateUserDTO): Promise<User> {
    const user = this.userRepository.create({
      ...createUserDTO,
      password: await bcrypt.hash(createUserDTO.password, 10)
    })
    const {password, ...createdUser} = await this.userRepository.save(user);
    return await this.userRepository.save(createdUser);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.userRepository.update(id, updateUserDto)
  }

  async remove(id: string) {
    return await this.userRepository.delete(id);
  }
  
}
