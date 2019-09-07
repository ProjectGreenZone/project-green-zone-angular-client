import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  message: string;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      id: this.username,
      password: this.password
    };

    this.authService.authenticateUser(user).subscribe(
    (response) => {
      if (response.success) {
        this.authService.storeUserData(response.token, response.User._id);
        this.message = '';
        this.router.navigate(['map']);
      } else {
        this.message = response.message;
      }
    },
    (error) => {
      this.message = error.name;
    });
  }
}
