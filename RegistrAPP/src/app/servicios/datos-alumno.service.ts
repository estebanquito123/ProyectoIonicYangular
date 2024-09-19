import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosAlumnoService {

  private nombreSubject = new BehaviorSubject<string>(''); // Crear un BehaviorSubject para el nombre
  nombre$ = this.nombreSubject.asObservable(); // Crear un BehaviorSubject para el nombre


  nombre: string;
  constructor() { }

  setNombre(nombre: string) {
    this.nombreSubject.next(nombre);
  }

  getNombre(): string {
    return this.nombreSubject.getValue();
  }
}
