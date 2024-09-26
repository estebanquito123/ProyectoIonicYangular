import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service'; // Importa el servicio

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userNombre: string = ''; // Nombre del usuario (docente o alumno)
  userRole: 'docente' | 'alumno' | null = null; // Rol del usuario
  asignaturas: string[] = []; // Asignaturas, dependerá si es docente o alumno

  constructor(private authService: AuthService) {}

  // Método que se ejecuta al inicializar el componente
  ngOnInit() {
    // Obtiene el nombre y rol del usuario desde el servicio de autenticación
    this.userNombre = this.authService.getUserName() || '';
    this.userRole = this.authService.getUserRole();

    // Asigna las asignaturas dependiendo del rol
    if (this.userRole === 'docente') {
      this.asignaturas = ['Matemáticas', 'Historia', 'Física']; // Asignaturas del docente
    } else if (this.userRole === 'alumno') {
      this.asignaturas = ['Química', 'Lengua', 'Inglés']; // Asignaturas del alumno
    }
  }

  // Método para ver el detalle de la asignatura seleccionada
  verDetalle(asignatura: string) {
    // Lógica para navegar a los detalles de la asignatura
    console.log('Ir a detalles de:', asignatura);
    // Aquí podrías navegar a la página de detalles de la asignatura con router.navigate()
  }

  // Método para generar un código QR (solo para docentes)
  generarQR(asignatura: string) {
    if (this.userRole === 'docente') {
      console.log('Generar código QR para:', asignatura);
      // Lógica para generar un código QR
    }
  }

  // Método para escanear un código QR (solo para alumnos)
  escanearQR(asignatura: string) {
    if (this.userRole === 'alumno') {
      console.log('Escanear código QR para:', asignatura);
      // Lógica para escanear el código QR
    }
  }


}

