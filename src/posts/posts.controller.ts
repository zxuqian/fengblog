import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { Public } from 'src/auth/auth.decorator';
import { Post as blogPost } from './entities/post.entity';
import { PostsService } from './posts.service';
import { CreatePostDTO } from './dto/create-post.dto';

@Controller('posts')
export class PostsController {

  constructor(private postsService: PostsService) {}

  @Public()
  @Get()
  findAll(): Promise<blogPost[]> {
    return this.postsService.findAll();
  }

  @Post()
  create(@Body() createPostDTO: CreatePostDTO, @Request() req): Promise<blogPost> {
    return this.postsService.create(createPostDTO, req.user);
  }
}
