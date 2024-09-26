import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-asignatura',
  templateUrl: './detalles-asignatura.component.html',
  styleUrls: ['./detalles-asignatura.component.scss']
})
export class DetalleAsignaturaComponent implements OnInit {
  asignatura: string = '';
  contenido: string = 'Contenido de ejemplo';
  fecha: string = '01/01/2024';
  hora: string = '10:00 AM';
  esDocente: boolean = true;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.asignatura = this.route.snapshot.paramMap.get('asignatura') || '';
  }

  generarQR() {
    // Lógica para generar código QR
    console.log('Generar código QR');
  }

  escanearQR() {
    // Lógica para escanear código QR
    console.log('Escanear código QR');
  }
}

