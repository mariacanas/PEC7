import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthStoreService {

  private tKey = 'SECRET';

  constructor() { }

  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }

  setToken(token: string): void {
    localStorage.setItem(this.tKey, token);
  }

  clearToken(): void {
    localStorage.removeItem(this.tKey);
  }

  getToken(): string {
    return localStorage.getItem(this.tKey);
  }
}
