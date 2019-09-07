import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IAuth } from '../interfaces/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';


// @Injectable()
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  username: any;
  baseUrl = environment.url;

  constructor(private http: HttpClient, private router: Router) { }

  loggedIn() {
    const browserToken = localStorage.getItem('id_token');
    if (this.authToken === null) {
      return false; // change to false
    }
    if (!browserToken) {
      return false; // change to false
    }
    if (browserToken === this.authToken) {
      return true;
    }
    return false; // change to false
  }

  authenticateUser(user: any): Observable<IAuth> {
    const url = this.baseUrl + '/login/';
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<IAuth>(url, user, {headers});
  }

  storeUserData(token, username) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('username', JSON.stringify(username));
    this.authToken = token;
    this.username = username;
  }

  logout() {
    this.authToken = null;
    this.username = null;
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
