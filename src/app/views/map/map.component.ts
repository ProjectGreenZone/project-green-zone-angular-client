import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { TrackerService } from '../../services/tracker.service';
import { WebSocketService } from '../../services/web-socket.service';
import {tileLayer, latLng, circle, polygon, marker} from 'leaflet';

  // host: {
  //   class:'container-fluid'
  // },

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']

})
export class MapComponent implements OnInit, OnDestroy {
  pageName = 'Map';
  renderMap = true;
  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 5,
    center: latLng(46.879966, -121.726909)
  };
  layersControl = {
    baseLayers: {
      'Open Street Map': tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
      'Open Cycle Map': tileLayer('http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    },
    overlays: {
      'Big Circle': circle([ 46.95, -122 ], { radius: 5000 }),
      'Big Square': polygon([[ 46.8, -121.55 ], [ 46.9, -121.55 ], [ 46.9, -121.7 ], [ 46.8, -121.7 ]])
    }
  };

  layers = [
    circle([ 46.95, -122 ], { radius: 5000 }),
    polygon([[ 46.8, -121.85 ], [ 46.92, -121.92 ], [ 46.87, -121.8 ]]),
    marker([ 46.879966, -121.726909 ])
];


  constructor(
    private userService: UserService,
    private authService: AuthService,
    private trackerService: TrackerService,
    private webSocketService: WebSocketService) { }

  ngOnInit() {

    this.webSocketService.connect(this.authService.username).subscribe((data) => {
      console.log(data);
    });
  this.renderMap = true;
  }

  ngOnDestroy() {
    this.webSocketService.disconnect();
  }

  sendMessage() {
    this.layers.push(marker([ 46.979966, -121.726909 ]))
    this.webSocketService.sendUpdates("settings");
  }


}
