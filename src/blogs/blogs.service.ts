import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blog } from './blog.entity';
import { CreateBlogDTO } from './dto/create-blog.dto';

@Injectable()
export class BlogsService {

  private readonly blogs: Blog[] = [];

  constructor(@InjectRepository(Blog)private blogsRepository: Repository<Blog>) {

  }

  findAll(): Promise<Blog[]> {
    return this.blogsRepository.find();
  }

  create(createBlogDTO: CreateBlogDTO): Promise<Blog> {
    const blog = new Blog();
    blog.title = createBlogDTO.title;

    return this.blogsRepository.save(blog);
  }
}
