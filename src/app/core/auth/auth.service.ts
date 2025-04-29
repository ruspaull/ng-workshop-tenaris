import { Injectable } from '@angular/core';

export const TOKEN_KEY = 'WT-AUTH_TOKEN';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(email: string, password: string) {
    console.log('logging in with:', email, password);
    // api call to login
    const token = `${email}-${password}`;
    localStorage.setItem(TOKEN_KEY, token);
    return token;
  }

  logout() {
    // api call to logout
    localStorage.removeItem(TOKEN_KEY);
  }

  isAuthenticated() {
    return !!this.getToken();
  }

  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  }
}
