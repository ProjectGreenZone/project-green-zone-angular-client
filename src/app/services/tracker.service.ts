import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { IUser } from '../interfaces/student';
import { IResponse } from '../interfaces/response';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { WebSocketService } from './web-socket.service';



@Injectable({
  providedIn: 'root'
})
export class TrackerService {
  // messages: Subject<any>;
  baseURL = environment.url;

  constructor(private http: HttpClient, private webSocketService: WebSocketService) {
    // this.messages = <Subject<any>>webSocketService.connect()


  }


  sendSettings(settings) {
    // this.webSocketService.getSubject().next(settings);
  }

  sendSignalToGetTrackers() {
    // const browserToken = sessionStorage.getItem('id_token');
    const headers = new HttpHeaders();
    const url = this.baseURL + '/trackers/';
    const response = this.http.get<IResponse>(url, {headers});
    response.subscribe((next)=> {console.log(next)})
  }

}
