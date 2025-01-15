import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller('messages')
export class MessagesController 
{
    constructor(private readonly messagesService: MessagesService) {}
    
    
    @ApiOperation({ summary: 'Get all messages for a conversation' }) 
    @Get(":id")
    async getById(@Param('id') id:number){
        return this.messagesService.getMessagesByConversationId(id);
    }

    
    @ApiOperation({ summary: 'Add one message to converesation' }) 
    @Post()
    async addMessage(@Body() body: {id:number, content:string}){
        return this.messagesService.addMessage(body.id, body.content);
    }
}
