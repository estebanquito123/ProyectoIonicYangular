import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  email: string = '';

  constructor(private router: Router) {}

  resetPassword() {
    alert('Se ha enviado un enlace para restablecer tu contraseña (simulado).');
    this.router.navigate(['/login']); // Redirige de vuelta al login
  }
}

