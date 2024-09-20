import { Component } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.logout();  // Llama a la función de logout al iniciar el componente
  }

  logout() {
    this.authService.logout();  // Llama al método logout del servicio
    this.router.navigate(['/login']);  // Redirige al login
  }
}

