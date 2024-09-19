import { Component, inject, OnInit } from '@angular/core';
import { DatosAlumnoService } from 'src/app/servicios/datos-alumno.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  nombre: string;

  DatosAlumno= inject(DatosAlumnoService)
  constructor() { }

  ngOnInit() {}

  saludame() {
    console.log('Hola'+ this.nombre);
  }

  guardarNombre() {
    this.DatosAlumno.setNombre(this.nombre)
    console.log('Nombre guardado:' + this.nombre);
  }
}
