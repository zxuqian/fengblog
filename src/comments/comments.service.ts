import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/posts/entities/post.entity';
import { PostsService } from 'src/posts/posts.service';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment) private commentsRepository: Repository<Comment>,
    private postsService: PostsService
  ) {}

  async create(postId: string, user: User, createCommentDto: CreateCommentDto) {
    const comment = this.commentsRepository.create(createCommentDto);
    const post = await this.postsService.findOne(postId);
    comment.post = post;
    comment.user = user;
    return this.commentsRepository.save(comment);
  }

  findAll(): Promise<Comment[]> {
    return this.commentsRepository.find();
  }

  findOne(id: string): Promise<Comment> {
    return this.commentsRepository.findOne(id);
  }

  // findAllByPostId(postId: string): Promise<Comment[]> {
  //   return this.commentsRepository.find({where: {post: {id: postId}}})
  // }

  update(id: string, updateCommentDto: UpdateCommentDto) {
    this.commentsRepository.update(id, updateCommentDto);
  }

  remove(id: string) {
    this.commentsRepository.delete(id);
  }
}
