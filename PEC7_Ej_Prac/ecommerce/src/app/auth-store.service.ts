import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthStoreService {

  private tKey = 'SECRET';

  constructor() { }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
  
  setToken(token: string): void {
    localStorage.setItem(this.tKey, token);
  }

  getToken(): string {
    return localStorage.getItem(this.tKey);
  }
}
