import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnagramaComponent } from './components/anagrama/anagrama.component';
import { PPTComponent } from './components/ppt/ppt.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { JuegoAdivinaComponent } from './components/juego-adivina/juego-adivina.component';
import { AgilidadAritmeticaComponent } from './components/agilidad-aritmetica/agilidad-aritmetica.component';
import { TaTeTiComponent } from './components/ta-te-ti/ta-te-ti.component';
import { LoginComponent } from './components/login/login.component';
import { PuntajesComponent } from './components/puntajes/puntajes.component';
import { LoginGuard } from './guards/login.guard';
import { JuegoPropioComponent } from './components/juego-propio/juego-propio.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [LoginGuard]
  },
  {
    path:'Login',
    component: LoginComponent
  },
  {
    path: 'Anagrama',
    component: AnagramaComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'PPT',
    component: PPTComponent,
    canActivate: [LoginGuard]
  },
  {
    path:'JuegoAdivina',
    component: JuegoAdivinaComponent,
    canActivate: [LoginGuard]
  },
  {
    path:'AgilidadAritmetica',
    component: AgilidadAritmeticaComponent,
    canActivate: [LoginGuard]
  },
  {
    path:'TaTeTi',
    component: TaTeTiComponent,
    canActivate: [LoginGuard]
  },
  {
    path:'Puntajes',
    component: PuntajesComponent,
    canActivate: [LoginGuard]
  },
  {
    path:'JuegoPropio',
    component: JuegoPropioComponent,
    canActivate: [LoginGuard]
  },
  {
    path:'**',
    component: NotFoundComponent,
    canActivate: [LoginGuard]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
