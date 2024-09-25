import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private userRole: 'docente' | 'alumno' | null = null;
  private userName: string | null = null;

  constructor() {}

  // Simula el proceso de autenticación
  login(username: string, password: string): boolean {
    if (username === 'docente' && password === '1234') {
      this.isAuthenticated = true;
      this.userRole = 'docente';
      this.userName = 'Profesor Ejemplo';
      return true;
    } else if (username === 'alumno' && password === '1234') {
      this.isAuthenticated = true;
      this.userRole = 'alumno';
      this.userName = 'Estudiante Ejemplo';
      return true;
    }
    return false;
  }

  logout() {
    this.isAuthenticated = false;
    this.userRole = null;
    this.userName = null;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getUserRole(): 'docente' | 'alumno' | null {
    return this.userRole;
  }

  getUserName(): string | null {
    return this.userName;
  }
}



