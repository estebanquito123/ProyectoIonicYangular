import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';  // Ajusta la ruta según tu proyecto

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  username: string = '';  // Variable para el nombre de usuario
  errorMessage: string = '';  // Para mostrar errores

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.authService.isUserValid(this.username)) {  // Comprueba si el usuario es válido
      this.router.navigate(['/login']);  // Redirige a la página de login si el usuario existe
    } else {
      this.errorMessage = 'Usuario no encontrado';  // Muestra mensaje de error si no se encuentra
    }
  }
}
