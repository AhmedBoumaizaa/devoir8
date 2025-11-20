import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../model/user.model';
import { FormsModule } from '@angular/forms';
import { Auth } from '../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styles: ``
})
export class LoginComponent {
  user = new User();
  erreur=0;
  constructor(private authService: Auth, private router: Router) {}

  onLoggedin() {
    console.log(this.user);
    const isValidUser: boolean = this.authService.SignIn(this.user);
    if (isValidUser) {
      this.router.navigate(['/']);
    } else {
      this.erreur=1;
    }
  }

}
