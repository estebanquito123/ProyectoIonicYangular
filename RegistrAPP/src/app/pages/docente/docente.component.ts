import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service'; // Importa el servicio

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.scss']
})
export class DocenteComponent implements OnInit {
  docenteNombre: string = ''; // Nombre del docente
  asignaturas: string[] = ['Matemáticas', 'Historia', 'Física']; // Asignaturas del docente

  constructor(private authService: AuthService, private router: Router) {}

  // Método que se ejecuta al inicializar el componente
  ngOnInit() {
    // Obtiene el nombre del docente desde el servicio de autenticación
    this.docenteNombre = this.authService.getUserName() || '';
  }

  // Método para ver el detalle de la asignatura seleccionada
  verDetalle(asignatura: string) {
    // Navega a la página de detalles de la asignatura pasando el nombre de la asignatura como parámetro
    this.router.navigate(['/detalle-asignatura', asignatura]);
  }
}



