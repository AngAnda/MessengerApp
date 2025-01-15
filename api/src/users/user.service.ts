import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user'
import { UserDto } from './userDto';
import { Conversation } from '../conversation/conversations.entity';
import { UserConversation } from '../conversation/user-conversation';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,

    @InjectRepository(Conversation)
    private conversationsRepository: Repository<Conversation>,

    @InjectRepository(UserConversation)
    private userConversationsRepository: Repository<UserConversation>,
  ) {}

  async createUser(username: string, email: string, password: string): Promise<User> {
    const newUser = this.usersRepository.create({ username, email, password});
    return this.usersRepository.save(newUser);
  }

  async findAll(): Promise<UserDto[]> {
    const users =  this.usersRepository.find();
    // return (await users).map(user =>({
    //   id: user.id,
    //   username: user.username
    // }));
    return users;
  }

  async findByUsername(username: string): Promise<User | undefined> {
    return this.usersRepository.findOne({
      where: { username },
    });
  }

  async findOne(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }

  async addConversationToUser(userId: number, conversationId: number): Promise<UserConversation> {
    const user = await this.usersRepository.findOne({
      where: { id: userId },
    });

    if (!user) {
      throw new Error(`User with ID ${userId} not found`);
    }

    const conversation = await this.conversationsRepository.findOne({
      where: { id: conversationId },
    });

    if (!conversation) {
      throw new Error(`Conversation with ID ${conversationId} not found`);
    }

    const userConversation = this.userConversationsRepository.create({
      user,
      conversation,
    });

    return this.userConversationsRepository.save(userConversation);
  }
}
