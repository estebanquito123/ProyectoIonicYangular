// src/app/servicios/asignatura.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Usuario, Asignatura } from 'src/app/models/bd.models';
import {usuariosSimulados} from 'src/app/models/data.models';

@Injectable({
  providedIn: 'root',
})
export class AsignaturaService {
  private asignaturasSubject = new BehaviorSubject<Asignatura[]>([  { nombre: 'Matemáticas', contenido: 'Álgebra', fecha: new Date ('2024-09-30'), hora: '10:00' },
    { nombre: 'Historia', contenido: 'Edad Moderna', fecha: new Date ('2024-09-30'), hora: '11:00' },]);

  // Simulando asignaturas para un docente o alumno
  private asignaturas: Asignatura[];

  constructor() {
    this.asignaturasSubject.next(this.asignaturas);
  }

  getAsignaturas() {
    return this.asignaturasSubject.asObservable();
  }

  // Puedes agregar métodos para añadir, modificar o eliminar asignaturas si es necesario
}


