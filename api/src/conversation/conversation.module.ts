import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Conversation, Tag } from './conversations.entity';
import { ConversationsController } from './conversations.controller';
import { ConversationsService } from './conversations.service';
import { UserConversation } from './user-conversation';
import { User } from '../users/user';

@Module({
  imports: [
    TypeOrmModule.forFeature([Conversation, Tag, UserConversation, User]), 
  ],
  providers: [ConversationsService],
  controllers: [ConversationsController],   
  exports: [TypeOrmModule],  
})
export class ConversationModule {}
