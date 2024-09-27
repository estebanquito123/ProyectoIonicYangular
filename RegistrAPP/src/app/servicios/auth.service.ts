import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private USERS = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
  ];

  constructor() { }

  login(username: string, password: string): boolean {
    const user = this.USERS.find(u => u.username === username && u.password === password);
    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('loggedInUser');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('loggedInUser') !== null;
  }

  getLoggedInUser() {
    return JSON.parse(localStorage.getItem('loggedInUser')!);
  }
  isUserValid(username: string): boolean {
    return this.USERS.some(user => user.username === username);
  }
}


