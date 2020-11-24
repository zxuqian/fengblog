import { Body, Controller, Get, Post } from '@nestjs/common';
import { Public } from 'src/auth/auth.decorator';
import { Blog } from './entities/blog.entity';
import { BlogsService } from './blogs.service';
import { CreateBlogDTO } from './dto/create-blog.dto';

@Controller('blogs')
export class BlogsController {

  constructor(private blogsService: BlogsService) {}

  @Public()
  @Get()
  findAll(): Promise<Blog[]> {
    return this.blogsService.findAll();
  }

  @Post()
  create(@Body() createBlogDTO: CreateBlogDTO): Promise<Blog> {
    return this.blogsService.create(createBlogDTO);
  }
}
