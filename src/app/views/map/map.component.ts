import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { TrackerService } from '../../services/tracker.service';
import { WebSocketService } from '../../services/web-socket.service';
import {tileLayer, latLng, circle, polygon, marker, divIcon} from 'leaflet';
import * as _ from 'lodash';

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
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 20, attribution: '...' })
    ],
    zoom: 14,
    center: latLng(46.879966, -121.726909)
  };
  layersControl = {
    baseLayers: {
      'Open Street Map': tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
    },
    // overlays: {
    //   'Big Circle': circle([ 46.95, -122 ], { radius: 5000 }),
    //   'Big Square': polygon([[ 46.8, -121.55 ], [ 46.9, -121.55 ], [ 46.9, -121.7 ], [ 46.8, -121.7 ]])
    // }
  };

  layers = [];
  trackers = [];
  colors = ['blue','yellow','green', 'purple','black']
  showPostionLimit = 3;
  trackerCount = 0

  mapCenter = latLng(46.879966, -121.726909);
  isTracking = false;
  trackingID = 0;
  myPosition = circle([46.879966, -121.726909], 200 , {color: "red"})

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private trackerService: TrackerService,
    private webSocketService: WebSocketService) { }

  ngOnInit() {

    this.webSocketService.connect(this.authService.username).subscribe((data) => {
      switch(data.type){
        case "message": {
          console.log(data);
          this.trackerService.sendSignalToGetTrackers();
          break;
        }

        case "tracker update": {
          this.updatePositions(data.tracker);
          break;
        }
      }
    });
    this.findMe();
    this.renderMap = true;
  }

  ngOnDestroy() {
    this.webSocketService.disconnect();
  }

  updatePositions(tracker) {
    console.log(tracker)
    const oldTrackerPositions = _.remove(this.trackers, (t) => t._id === tracker._id)[0];

    const history = _.sortBy(tracker.history, [(h) => h._id]);
    _.reverse(history);

    const newTrackerPositions = {
      _id: tracker._id,
      color: 'blue',
      battery: history[0].battery,
      time: new Date(history[0]._id),
      latestPostion: history[0].position,
      positions: []
    };

    if (oldTrackerPositions) {
      newTrackerPositions.color = oldTrackerPositions.color;
    } else {
      newTrackerPositions.color = this.colors[this.trackerCount % this.colors.length]
      this.trackerCount++;
    }

    for (let i = 0; i < this.showPostionLimit; i++) {
      let labelClassName = 'postion-label';
      if (i === 0) {
        labelClassName = 'postion-label-latest';
      }
      const h = tracker.history[i]
      const time = new Date(h._id);
      const month = time.getMonth() + 1;
      const label = tracker._id + '|' + month + '.' + time.getDate() + '-' + time.getHours() + '.' + time.getMinutes();

      const newCircle = circle([h.position.lat, h.position.lon], h.position.accuracy, {color: newTrackerPositions.color});

      const newMarker = marker([h.position.lat, h.position.lon], {icon: divIcon({html: label, className: labelClassName})});


      newTrackerPositions.positions.push(newCircle);
      newTrackerPositions.positions.push(newMarker);

    }

    // let hcount = 1;
    // for (const h of tracker.history) {
    //   let labelClassName = 'postion-label';
    //   if (hcount === 1) {
    //     labelClassName = 'postion-label-latest';
    //   }
    //   const time = new Date(h._id);
    //   const month = time.getMonth() +1;
    //   const label = tracker._id + '|' +month+"."+ time.getDate() +"-"+ time.getHours()+"."+time.getMinutes();

    //   const newCircle = circle([h.position.lat, h.position.lon], h.position.accuracy, {color: newTrackerPositions.color});

    //   const newMarker = marker([h.position.lat, h.position.lon], {icon: divIcon({html:label, className: labelClassName})});


    //   newTrackerPositions.positions.push(newCircle);
    //   newTrackerPositions.positions.push(newMarker);

    //   if(hcount >= this.showPostionLimit){
    //     break;
    //   }
    //   hcount++;
    // }

    this.trackers.push(newTrackerPositions);

    this.setLayers();

  }

  sendMessage() {

    this.layers.push(marker([ 46.979966, -121.726909 ]));
    this.layers.push(circle([ 46.95, -122 ], { radius: 5000 }));
    this.layers.push(polygon([[ 46.8, -121.85 ], [ 46.92, -121.92 ], [ 46.87, -121.8 ]]));

    // this.webSocketService.sendUpdates("settings");
  }

  setLayers() {
    let layers = [this.myPosition];

    for (const t of this.trackers) {
      layers = layers.concat(t.positions);
    }
    this.layers = layers;
  }
  focusMe(event) {
    console.log(event.target);
    const tracker = _.find(this.trackers, { _id: event.target.id});
    this.mapCenter = latLng(tracker.latestPostion.lat, tracker.latestPostion.lon);
  }

  trackMe() {

    if(this.isTracking)
    {
      navigator.geolocation.clearWatch(this.trackingID);
      this.isTracking = false;
      // alert("Stop traing my postion")
    } else {
      if (navigator.geolocation) {
      this.isTracking = true;
      this.trackingID = navigator.geolocation.watchPosition((position) => {
        this.mapCenter = latLng(position.coords.latitude, position.coords.longitude);
        this.myPosition.setRadius(position.coords.accuracy);
        this.myPosition.setLatLng([position.coords.latitude, position.coords.longitude])
        this.setLayers();
      });
      // alert("Start traing my postion")
    } else {
      alert("Geolocation is not supported by this browser.");
    }
    }
  }

  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.mapCenter = latLng(position.coords.latitude, position.coords.longitude);

        this.myPosition.setRadius(position.coords.accuracy);
        this.myPosition.setLatLng([position.coords.latitude, position.coords.longitude])
        this.setLayers();
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }


}
