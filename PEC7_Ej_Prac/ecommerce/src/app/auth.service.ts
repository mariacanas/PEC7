import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthStoreService } from './auth-store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api = "http://localhost:3000/api/articles";
  constructor(private http: HttpClient,private authStore: AuthStoreService) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.api}/login`, { username, password }).pipe(
      tap(response => {
        if (response.token) {
          this.authStore.setToken(response.token);
        }
        })
      );
  }
  register(username: string, password: string): Observable<any> {
    return this.http.post(`${this.api}/register`, { username, password });
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(''); 
  }
}



