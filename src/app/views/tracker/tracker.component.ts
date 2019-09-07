import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {
  trackers: any;

  constructor(private userService: UserService, private authService: AuthService) { }

  ngOnInit() {
    // this.userService.getTrackers(this.authService.user.username);
  }

}
