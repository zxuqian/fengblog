import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { CreatePostDTO } from './dto/create-post.dto';
import { User } from '../users/entities/user.entity';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {

  constructor(@InjectRepository(Post) private postsRepository: Repository<Post>) {

  }

  async findAll(): Promise<Post[]> {
    return await  this.postsRepository.find();
  }

  async findOne(id: string): Promise<Post> {
    return await  this.postsRepository.findOne(id, {relations: ['comments']})
  }

  // findAllCommentsByPostId(id: string): Promise<Post> {
  //   return this.postsRepository.findOne(id, {relations: ['comments']});
  // }

  async create(createPostDTO: CreatePostDTO, user: User): Promise<Post> {
    const post = this.postsRepository.create({...createPostDTO, user})
    return await  this.postsRepository.save(post);
  }

  

  async update(id: string, updatePostDto: UpdatePostDto) {
    return await  this.postsRepository.update(id, updatePostDto)
  }

  async remove(id: string) {
    return await this.postsRepository.delete(id);
  }
}
