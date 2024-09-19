import { DatosAlumnoService } from './../../servicios/datos-alumno.service';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {
  nombre: string;

  DatosAlumno= inject(DatosAlumnoService)
  constructor() {
    this.nombre= this.DatosAlumno.getNombre();
   }

  ngOnInit() {
  }


}
