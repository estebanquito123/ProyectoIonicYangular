import { Usuario } from "./bd.models"; // Importar la interface de usuario

export const usuariosSimulados: Usuario[] = [
  {
    id: 1,
    nombreCompleto: "Juan Pérez",
    usuario: "alumno",
    clave: "1234",
    rol: 'alumno',  // Juan Pérez es un alumno
    asignaturas: [
      {
        nombre: "Matemáticas",
        contenido: "Álgebra y geometría",
        fecha: new Date('2024-09-30T10:00:00'),
        hora: "10:00"
      },
      {
        nombre: "Historia",
        contenido: "Revolución Francesa",
        fecha: new Date('2024-10-01T14:00:00'),
        hora: "10:00"

      },
      {
        nombre: "Física",
        contenido: "Mecánica clásica",
        fecha: new Date('2024-10-02T08:00:00'),
        hora: "10:00"
      }
    ]
  },
  {
    id: 2,
    nombreCompleto: "María González",
    usuario: "docente",
    clave: "1234",
    rol: 'docente',  // María González es docente
    asignaturas: [
      {
        nombre: "Ciencias",
        contenido: "Física y Química",
        fecha: new Date('2024-09-29'),
        hora: "10:00"
      },
      {
        nombre: "Literatura",
        contenido: "Realismo y Naturalismo",
        fecha: new Date('2024-10-02'),
        hora: "14:00"
      },
      {
        nombre: "Biología",
        contenido: "Evolución y genética",
        fecha: new Date('2024-10-03T13:00:00'),
        hora: "10:00"
      }
    ]
  },
  {
    id: 3,
    nombreCompleto: "Carlos Ramírez",
    usuario: "cramirez",
    clave: "987654",
    rol: 'alumno',  // Carlos Ramírez es un alumno
    asignaturas: [
      {
        nombre: "Inglés",
        contenido: "Tiempos verbales y vocabulario",
        fecha: new Date('2024-09-28T08:30:00'),
        hora: "10:00"
      },
      {
        nombre: "Arte",
        contenido: "Historia del arte renacentista",
        fecha: new Date('2024-09-29T15:00:00'),
        hora: "10:00"
      },
      {
        nombre: "Matemáticas",
        contenido: "Cálculo diferencial",
        fecha: new Date('2024-10-04T09:30:00'),
        hora: "10:00"
      }
    ]
  }
];
