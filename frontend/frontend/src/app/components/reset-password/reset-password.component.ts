import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../services/users.service';

@Component({
  selector: 'app-reset-password',
  imports: [FormsModule, CommonModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {

  constructor(private userService: UserService){}

  user = {
    password: ''
  };

  passwordPattern = /^(?=.*\d).{6,}$/;

  update()
  {
    console.log(this.user.password)
    this.userService.updatePassword(39, this.user.password).subscribe((res) =>{
      alert("user updated");
    })
    //console.log("update password");
  }
}
