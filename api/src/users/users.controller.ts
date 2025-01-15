import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './user.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(
    @Body('username') username: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    return this.usersService.createUser(username, email, password);
  }

  @ApiOperation({ summary: 'Get all users' }) 
  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  @ApiOperation({ summary: 'Get user by Id' }) 
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }

  @ApiOperation({ summary: 'Add conversation to user' }) 
  @Post(':userId/conversations/:conversationId')
  async addConversationToUser(
    @Param('userId') userId: number,
    @Param('conversationId') conversationId: number,
  ) {
    return this.usersService.addConversationToUser(userId, conversationId);
  }
}
