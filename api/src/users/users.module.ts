import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user';
import { UsersService } from './user.service';
import { UsersController } from './users.controller';
import { Conversation } from '../conversation/conversations.entity';
import { UserConversation } from '../conversation/user-conversation';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Conversation, UserConversation]), 
  ],
  providers: [UsersService],
  controllers: [UsersController],   
  exports: [UsersService],      
})
export class UsersModule {}
