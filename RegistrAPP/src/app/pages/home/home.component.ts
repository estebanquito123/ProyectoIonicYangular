import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  username: string = '';  // Aquí guardaremos el nombre de usuario

  constructor(private authService: AuthService) { }

  ngOnInit() {
    const user = this.authService.getLoggedInUser();  // Obtiene el usuario logueado
    if (user) {
      this.username = user.username;  // Asigna el nombre de usuario
    }
  }
}
