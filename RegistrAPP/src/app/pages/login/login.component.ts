import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service'; // Importa el servicio

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    const success = this.authService.login(this.username, this.password);

    if (success) {
      const userRole = this.authService.getUserRole();

      if (userRole === 'docente') {
        this.router.navigate(['/']);
      } else if (userRole === 'alumno') {
        this.router.navigate(['/']);
      }
    } else {
      this.loginError = 'Usuario o contraseña incorrectos';
    }
  }

  onForgotPassword() {
    this.router.navigate(['/reset-password']);
  }
}


