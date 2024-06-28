import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api = "http://localhost:3000/api/articles";
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.api}/login`, { username, password });
  }
  register(username: string, password: string): Observable<any> {
    return this.http.post(`${this.api}/register`, { username, password });
  }
}



