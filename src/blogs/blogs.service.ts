import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blog } from './entities/blog.entity';
import { CreateBlogDTO } from './dto/create-blog.dto';

@Injectable()
export class BlogsService {


  constructor(@InjectRepository(Blog)private blogsRepository: Repository<Blog>) {

  }

  async findAll(): Promise<Blog[]> {
    return this.blogsRepository.find();
  }

  async create(createBlogDTO: CreateBlogDTO): Promise<Blog> {
    const blog = new Blog();
    blog.title = createBlogDTO.title;

    return this.blogsRepository.save(blog);
  }
}
