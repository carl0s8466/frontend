import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-incidencia-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './incidencia-list.component.html',
  styleUrls: ['./incidencia-list.component.scss']
})
export class IncidenciaListComponent implements OnInit {

  incidenciasOriginales: any[] = [];
  incidenciasFiltradas: any[] = [];

  searchTerm: string = '';
  selectedSeccion: string = '';
  selectedGrado: string = '';

  seccionesDisponibles: string[] = [];
  gradosDisponibles: string[] = [];

  constructor() {}

  ngOnInit(): void {
    //  Datos de prueba sin backend eliminar
    this.incidenciasOriginales = [
      { id: 1, nombre: 'Incidencia 1', descripcion: 'Descripción 1', fecha: '2025-07-01', seccion: 'A', grado: '1°' },
      { id: 2, nombre: 'Incidencia 2', descripcion: 'Descripción 2', fecha: '2025-07-02', seccion: 'B', grado: '2°' },
      { id: 3, nombre: 'Incidencia 3', descripcion: 'Descripción 3', fecha: '2025-07-03', seccion: 'A', grado: '2°' },
      { id: 4, nombre: 'Incidencia 4', descripcion: 'Descripción 4', fecha: '2025-07-04', seccion: 'C', grado: '1°' }
    ];

    this.incidenciasFiltradas = this.incidenciasOriginales;

    this.seccionesDisponibles = [...new Set(this.incidenciasOriginales.map(i => i.seccion))];
    this.gradosDisponibles = [...new Set(this.incidenciasOriginales.map(i => i.grado))];
  }

  filtrarIncidencias(): void {
    this.incidenciasFiltradas = this.incidenciasOriginales.filter(incidencia => {
      const matchesSearch = this.searchTerm.trim() === ''
        || incidencia.nombre?.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchesSeccion = this.selectedSeccion === ''
        || incidencia.seccion === this.selectedSeccion;

      const matchesGrado = this.selectedGrado === ''
        || incidencia.grado === this.selectedGrado;

      return matchesSearch && matchesSeccion && matchesGrado;
    });
  }

}
