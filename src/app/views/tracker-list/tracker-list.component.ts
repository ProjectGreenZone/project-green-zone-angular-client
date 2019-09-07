import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-tracker-list',
  templateUrl: './tracker-list.component.html',
  styleUrls: ['./tracker-list.component.css']
})
export class TrackerListComponent implements OnInit {
  pageName = 'Trackers';

  constructor(private userService: UserService, private authService: AuthService) { }

  ngOnInit() {
    this.userService.getTrackers(this.authService.username).subscribe(
    (response) => {
      console.log(response);
    },
    (error) => {
      console.log(error);
    });
  }

}
