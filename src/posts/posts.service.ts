import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { CreatePostDTO } from './dto/create-post.dto';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class PostsService {


  constructor(@InjectRepository(Post)private postsRepository: Repository<Post>) {

  }

  async findAll(): Promise<Post[]> {
    return this.postsRepository.find();
  }

  async create(createPostDTO: CreatePostDTO, user: User): Promise<Post> {
    const post = this.postsRepository.create({...createPostDTO, user})
    return this.postsRepository.save(post);
  }
}