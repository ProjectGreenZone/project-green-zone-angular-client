import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { IUser } from '../interfaces/student';
import { IResponse } from '../interfaces/response';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseURL = environment.url;
  url = this.baseURL + '/students/';

  constructor(private http: HttpClient) { }

  addUser(user: any): Observable<IResponse> {
    const browserToken = sessionStorage.getItem('id_token');
    const headers = new HttpHeaders();
    headers.append('id_token', browserToken);
    headers.append('Content-Type', 'application/json');

    const url = this.baseURL + '/users/register/';

    return this.http.post<IResponse>(url, user, {headers});
  }

  getTrackers(username: string) {
    const browserToken = sessionStorage.getItem('id_token');
    const headers = new HttpHeaders();
    headers.append('id_token', browserToken);
    headers.append('Content-Type', 'application/json');

    const url = this.baseURL + '/users/trackers/' + username;

    return this.http.get<IResponse>(url, {headers});
  }
}
