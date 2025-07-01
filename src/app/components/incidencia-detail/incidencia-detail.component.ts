import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-incidencia-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './incidencia-detail.component.html',
  styleUrls: ['./incidencia-detail.component.scss']
})
export class IncidenciaDetailComponent implements OnInit {

  //DATOS
  student: any = {};
  incidencias: any[] = [];
  incidenciasFiltradas: any[] = [];
  searchTerm: string = '';

  //CREAR/EDITAR
  incidenciaForm: any = {
    id: null,
    nombre: '',
    descripcion: ''
  };
  isEditing: boolean = false;

  //CRUD
  mostrarModal: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const studentId = this.route.snapshot.paramMap.get('id');

    //  Datos de prueba sin backend eliminar
    this.student = {
      id: studentId,
      nombre: 'Juan Pérez',
      seccion: 'A',
      grado: '1°',
      fechaNacimiento: '2010-05-15'
    };
    //  Datos de prueba sin backend eliminar
    this.incidencias = [
      { id: 1, nombre: 'Falta de tarea', descripcion: 'No trajo tarea de matemáticas' },
      { id: 2, nombre: 'Disciplina', descripcion: 'Habló en clase sin permiso' },
      { id: 3, nombre: 'Asistencia', descripcion: 'Llegó tarde a clase' }
    ];

    this.incidenciasFiltradas = this.incidencias;
  }

  filtrarIncidencias() {
    if (this.searchTerm.trim() === '') {
      this.incidenciasFiltradas = this.incidencias;
    } else {
      const term = this.searchTerm.toLowerCase();
      this.incidenciasFiltradas = this.incidencias.filter(i =>
        i.nombre.toLowerCase().includes(term) ||
        i.descripcion.toLowerCase().includes(term)
      );
    }
  }

  nuevaIncidencia() {
    this.incidenciaForm = { id: null, nombre: '', descripcion: '' };
    this.isEditing = false;
    this.mostrarModal = true;
  }

  editarIncidencia(id: number) {
    const incidencia = this.incidencias.find(i => i.id === id);
    if (incidencia) {
      this.incidenciaForm = { ...incidencia };
      this.isEditing = true;
      this.mostrarModal = true;
    }
  }

  guardarIncidencia() {
    if (this.isEditing) {
      this.incidencias = this.incidencias.map(i =>
        i.id === this.incidenciaForm.id ? { ...this.incidenciaForm } : i
      );
    } else {
      const newId = this.incidencias.length > 0 ? Math.max(...this.incidencias.map(i => i.id)) + 1 : 1;
      const nueva = { ...this.incidenciaForm, id: newId };
      this.incidencias.push(nueva);
    }
    this.filtrarIncidencias();
    this.mostrarModal = false; // Cierra modal
  }

  eliminarIncidencia(id: number) {
    this.incidencias = this.incidencias.filter(i => i.id !== id);
    this.filtrarIncidencias();
  }

  cerrarModal() {
    this.mostrarModal = false;
  }

  volver() {
    this.router.navigate(['/incidencias']);
  }

}
