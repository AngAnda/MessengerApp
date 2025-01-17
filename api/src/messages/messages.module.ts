import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { Message } from './messages';

@Module({
  imports: [
    TypeOrmModule.forFeature([Message]), 
  ],
  providers: [MessagesService], 
  controllers: [MessagesController],
  exports: [MessagesService], 
})
export class MessagesModule {}
