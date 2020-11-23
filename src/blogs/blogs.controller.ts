import { Body, Controller, Get, Post } from '@nestjs/common';
import { Blog } from './blog.entity';
import { BlogsService } from './blogs.service';
import { CreateBlogDTO } from './dto/create-blog.dto';

@Controller('blogs')
export class BlogsController {

  constructor(private blogsService: BlogsService) {}

  @Get()
  findAll(): Promise<Blog[]> {
    return this.blogsService.findAll();
  }

  @Post()
  create(@Body() createBlogDTO: CreateBlogDTO): Promise<Blog> {
    return this.blogsService.create(createBlogDTO);
  }
}
