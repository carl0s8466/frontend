import { IncidenciaListComponent } from './components/incidencia-list/incidencia-list.component';
import { IncidenciaDetailComponent } from './components/incidencia-detail/incidencia-detail.component';
import { IncidenciaCreateComponent } from './components/incidencia-create/incidencia-create.component';
import {Routes} from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'incidencias', pathMatch: 'full' },
  { path: 'incidencias', component: IncidenciaListComponent },
  { path: 'incidencias/:id', component: IncidenciaDetailComponent },
  { path: 'create-incidencia', component: IncidenciaCreateComponent },
  {
    path: 'incidencias/:id',
    loadComponent: () => import('./components/incidencia-detail/incidencia-detail.component').then(m => m.IncidenciaDetailComponent)
  }

];
