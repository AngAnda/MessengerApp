import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './user.service';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest'; 
import { getRepositoryToken } from '@nestjs/typeorm';
import { UsersController } from './users.controller';

describe('UsersController (integration)', () => {
  let app: INestApplication;
  let usersService = { 
    createUser: jest.fn(), 
    findAll: jest.fn(),
    findOne: jest.fn(),
    addConversationToUser: jest.fn(),
    updatePassword: jest.fn(),
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        { 
          provide: UsersService, 
          useValue: usersService 
        },
      ],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  it('should create a new user', async () => {
    const newUser = { id: 1, username: 'testuser', email: 'test@example.com' };
    usersService.createUser.mockReturnValue(newUser);

    const response = await request(app.getHttpServer())
      .post('/users')
      .send({
        username: 'testuser',
        email: 'test@example.com',
        password: 'password123',
      })
      .expect(201);

    expect(response.body).toEqual(newUser);
    expect(usersService.createUser).toHaveBeenCalledWith('testuser', 'test@example.com', 'password123');
  });

  it('should return all users', async () => {
    const users = [
      { id: 1, username: 'testuser', email: 'test@example.com' }
    ];
    usersService.findAll.mockReturnValue(users);

    const response = await request(app.getHttpServer())
      .get('/users')
      .expect(200);

    expect(response.body).toEqual(users);
    expect(usersService.findAll).toHaveBeenCalled();
  });

  it('should return user by ID', async () => {
    const user = { id: 1, username: 'testuser', email: 'test@example.com' };
    usersService.findOne.mockReturnValue(user);

    const response = await request(app.getHttpServer())
      .get('/users/1')
      .expect(200);

    expect(response.body).toEqual(user);
    expect(usersService.findOne).toHaveBeenCalledWith(1);
  });

  it('should add conversation to user', async () => {
    const userId = 1;
    const conversationId = 2;
    usersService.addConversationToUser.mockReturnValue({ userId, conversationId });

    const response = await request(app.getHttpServer())
      .post('/users/1/conversations/2')
      .expect(201);

    expect(response.body).toEqual({ userId, conversationId });
    expect(usersService.addConversationToUser).toHaveBeenCalledWith(userId, conversationId);
  });

  it('should update user password', async () => {
    const userId = 1;
    const newPassword = 'newpassword123';
    usersService.updatePassword.mockReturnValue({ id: userId, password: newPassword });

    const response = await request(app.getHttpServer())
      .post('/users/1')
      .send({ password: newPassword })
      .expect(200);

    expect(response.body.password).toBe(newPassword);
    expect(usersService.updatePassword).toHaveBeenCalledWith(userId, newPassword);
  });

  afterAll(async () => {
    await app.close();
  });
});
