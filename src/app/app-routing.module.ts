import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { AutosComponent } from './screens/autos/autos.component';
import { E404Component } from './screens/e404/e404.component';
import { FormularioComponent } from './screens/formulario/formulario.component';

const routes: Routes = [

  {path: 'inicio', component: HomeComponent},
  {path: 'autos', component: AutosComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: '**', component: E404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
