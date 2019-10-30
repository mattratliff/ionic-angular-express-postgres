import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from '../app/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL = "http://localhost:8000";

  constructor(private http: HttpClient) { }

  public getusers(): Observable<IUser> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get<IUser>(`${this.API_URL}/getusers`, { headers: headers });
  }
}
