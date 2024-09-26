import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { DetalleAsignaturaComponent } from './detalles-asignatura/detalles-asignatura.component';



const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'detalles', component: DetalleAsignaturaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
