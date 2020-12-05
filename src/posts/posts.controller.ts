import { Body, Controller, Delete, Get, Param, Post, Put, Request } from '@nestjs/common';
import { Public } from '../auth/auth.decorator';
import { Post as BlogPost } from './entities/post.entity';
import { PostsService } from './posts.service';
import { CreatePostDTO } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostsController {

  constructor(private postsService: PostsService) {}

  @Public()
  @Get()
  findAll(): Promise<BlogPost[]> {
    return this.postsService.findAll();
  }

  @Post()
  create(@Body() createPostDTO: CreatePostDTO, @Request() req): Promise<BlogPost> {
    return this.postsService.create(createPostDTO, req.user);
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(id);
  }
}
