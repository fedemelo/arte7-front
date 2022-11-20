import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeliculaListComponent } from './pelicula-list/pelicula-list.component';
import { PeliculaDetailComponent } from './pelicula-detail/pelicula-detail.component';
import { VistaPrincipalComponent } from './vista-principal/vista-principal.component';


const routes: Routes = [{
  path: 'pelicula',
  children: [
    {
      path: 'list',
      component: PeliculaListComponent
    },
    {
      path: ':id',
      component: PeliculaDetailComponent
    },
    {
      path: 'principal',
      component: VistaPrincipalComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculaRoutingModule { }
