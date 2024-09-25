import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service'; // Importa el servicio

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss']
})
export class AlumnoComponent implements OnInit {
  alumnoNombre: string = ''; // Nombre del alumno
  asignaturas: string[] = ['Química', 'Lengua', 'Inglés']; // Asignaturas en las que el alumno está inscrito

  constructor(private authService: AuthService, private router: Router) {}

  // Método que se ejecuta al inicializar el componente
  ngOnInit() {
    // Obtiene el nombre del alumno desde el servicio de autenticación
    this.alumnoNombre = this.authService.getUserName() || '';
  }

  // Método para ver el detalle de la asignatura seleccionada
  verDetalle(asignatura: string) {
    // Navega a la página de detalles de la asignatura pasando el nombre de la asignatura como parámetro
    this.router.navigate(['/detalle-asignatura', asignatura]);
  }
}


