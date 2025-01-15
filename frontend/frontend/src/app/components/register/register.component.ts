import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User, UserService } from '../../../services/users.service';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user: Partial<User> = {
    username: '',
    email: '',
    password: '',
  };

  constructor(private userService: UserService, private router:Router) {}

  register(): void {
    this.userService.register(this.user as User).subscribe(
      (response) => {
        console.log('User registered successfully:', response);
        alert('Registration successful!');
        this.router.navigate(['/mess', this.user.username])
      },
      (error) => {
        console.error('Error registering user:', error);
        alert('Registration failed. Please try again.');
      }
    );
  }
}
