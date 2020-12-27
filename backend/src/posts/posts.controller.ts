import { Body, Controller, Delete, Get, HttpCode, Param, ParseUUIDPipe, Post, Put, Request } from '@nestjs/common';
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
  async findAll(): Promise<BlogPost[]> {
    return await this.postsService.findAll();
  }

  @Public()
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.postsService.findOne(id);
  }

  // @Public()
  // @Get(':id/comments')
  // async findAllCommentsByPostId(@Param('id') id: string) {
  //   const post = await this.postsService.findAllCommentsByPostId(id);
  //   return post.comments;
  // }

  @Post()
  async create(@Body() createPostDTO: CreatePostDTO, @Request() req): Promise<BlogPost> {
    return await this.postsService.create(createPostDTO, req.user);
  }

  @Put(':id')
  async update(@Param('id', new ParseUUIDPipe()) id: string, @Body() updatePostDto: UpdatePostDto) {
    return await this.postsService.update(id, updatePostDto);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.postsService.remove(id);
  }
}
