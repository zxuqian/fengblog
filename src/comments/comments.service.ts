import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentsService {

  constructor(@InjectRepository(Comment) private commentsRepository: Repository<Comment>) {}

  create(createCommentDto: CreateCommentDto) {
    const comment = this.commentsRepository.create(createCommentDto);
    return this.commentsRepository.save(comment)
  }

  findAll(): Promise<Comment[]> {
    return this.commentsRepository.find();
  }

  findOne(id: string): Promise<Comment> {
    return this.commentsRepository.findOne(id)
  }

  update(id: string, updateCommentDto: UpdateCommentDto) {
    this.commentsRepository.update(id, updateCommentDto)
  }

  remove(id: string) {
    this.commentsRepository.delete(id);
  }
}
