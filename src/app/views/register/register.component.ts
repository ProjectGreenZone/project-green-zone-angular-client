import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string;
  password: string;
  message: string;
  constructor(private userService: UserService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      username: this.username,
      password: this.password
    };

    this.userService.addUser(user).subscribe(
    (response) => {
      if (response.success) {
        // this.authService.storeUserData(response.token, data.student)
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
