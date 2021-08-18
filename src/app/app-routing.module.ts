import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './estudiante/listado/listado.component';
import { RegistroComponent } from './estudiante/registro/registro.component';

import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
  { path: 'principal', component: PrincipalComponent },
  { path: 'listado', component: ListadoComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'editEstudiante/:id', component: RegistroComponent },
  { path: '**', redirectTo: '/principal', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
