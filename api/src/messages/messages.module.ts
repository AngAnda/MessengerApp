import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { Message } from './messages';
import { ConversationsService } from 'src/conversation/conversations.service';
import { UsersService } from 'src/users/user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Message]), 
  ],
  providers: [MessagesService], 
  controllers: [MessagesController],
  exports: [MessagesService, ConversationsService, UsersService], 
})
export class MessagesModule {}
