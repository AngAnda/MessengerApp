import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { ConversationsService } from '../../../services/conversations.service';
import { Conversation } from '../../models/Conversation';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  imports: [CommonModule, FormsModule]
})
export class CreateComponent implements OnInit {
  title: string = '';
  tags: string = '';
  users: string = '';
  mainUser: number = 0

  constructor(
    private router: Router,
    private authService: AuthService,
    private conversationService: ConversationsService
  ) {}


  ngOnInit(): void {
    const user =  this.authService.getUser()
    this.mainUser = this.mainUser = user && user.id ? user.id : 0;
  }

  createConversation(event: Event): void {
    event.preventDefault();

    const newConversation : Conversation = {
      id: '0',
      title: this.title,
      tags: this.tags.split(' '),
    };

    console.log('Creating conversation:', newConversation);

    this.conversationService.createConversation(newConversation, [this.mainUser]).subscribe({
      next: (data) => { 
        this.authService.setConversationId(data.id); 
        this.router.navigate(['/mess', this.mainUser, data.id]);
      },
    })

  }
}
