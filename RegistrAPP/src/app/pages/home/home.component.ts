import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Asignatura, Usuario } from 'src/app/models/bd.models';
import { usuariosSimulados } from 'src/app/models/data.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  asignaturas: Asignatura[] = [];  // Asignaturas del usuario
  nombreUsuario: string = '';      // Nombre del usuario logueado
  rolUsuario: string = '';         // Rol del usuario logueado (docente/alumno)

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Obtener el nombre del usuario autenticado
    this.authService.usuario$.subscribe(nombre => {
      this.nombreUsuario = nombre;

      // Obtener el rol del usuario autenticado
      this.authService.rol$.subscribe(rol => {
        this.rolUsuario = rol;

        // Buscar las asignaturas del usuario en función de su rol
        const usuario = usuariosSimulados.find(user => user.nombreCompleto === nombre && user.rol === rol);
        if (usuario) {
          this.asignaturas = usuario.asignaturas;
        }
      });
    });
  }

  verDetalles(asignatura: Asignatura) {
    // Lógica para navegar a los detalles de la asignatura
    // this.router.navigate(['/detalles-asignatura', asignatura.nombre]);
    console.log('Navegar a detalles de la asignatura:', asignatura.nombre);
  }
}



