import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Subject, Observable } from 'rxjs';
import { WebSocketSubject } from 'rxjs/webSocket';
import { environment } from '../../environments/environment';
// import { Socket } from 'socket.io';


@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  // Our socket connection
  private socket;
  private webSocketObservable: Observable<any>;

  constructor() {}

  connect(username: string) {
    const url = environment.ws_url + '/webapp_io';
    // const url = environment.ws_url;

    this.socket = io(url, {
      query: {
        username
      }
    });

    this.socket.on('connect', (error) => {
      console.log('Connected to ' + url);
    });

    this.socket.on('reconnect_attempt', () => {
      console.log('Reconnecting ' + url);
      this.socket.io.opts.query = {
        username
      }
    });

    this.socket.on('connect_error', (error) => {
      console.log('Connection Error ' + url);
    });


    // We define our observable which will observe any incoming messages
    // from our socket.io server.
    this.webSocketObservable = new Observable<any>((subscriber) => {
      this.socket.on('message', (data) => {
        data.type = "message";
        console.log("Received message from Websocket Server")
        subscriber.next(data);
      });
      this.socket.on('tracker update', (data) => {
        data.type = "tracker update";
        console.log("Received tracker update from Websocket Server")
        subscriber.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });

    return this.webSocketObservable;
  }

  disconnect() {
    // this.socketSubject.next(2);
    // this.socket.disconnect();
  }

  sendUpdates(updates) {
    this.socket.emit('settings update', JSON.stringify(updates));
  }

  getWebSocketObservable() {
    return this.webSocketObservable;
  }

}
