export interface Asignatura {
  nombre: string;
  contenido: string;
  fecha: Date;  // Podrías usar Date para manejar fecha y hora
}

export interface Usuario {
  id: number;
  nombreCompleto: string;
  usuario: string;
  clave:string;
  rol: string;
  asignaturas: Asignatura[];  // Un array de asignaturas
}
