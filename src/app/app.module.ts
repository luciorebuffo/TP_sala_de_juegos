import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { AnagramaComponent } from './components/anagrama/anagrama.component';
import { PPTComponent } from './components/ppt/ppt.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { JuegoAdivinaComponent } from './components/juego-adivina/juego-adivina.component';
import { AgilidadAritmeticaComponent } from './components/agilidad-aritmetica/agilidad-aritmetica.component';
import { TaTeTiComponent } from './components/ta-te-ti/ta-te-ti.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { MenuComponent } from './components/menu/menu.component';
import { PuntajesComponent } from './components/puntajes/puntajes.component';


@NgModule({
  declarations: [
    AppComponent,
    AnagramaComponent,
    PPTComponent,
    HomeComponent,
    NotFoundComponent,
    JuegoAdivinaComponent,
    AgilidadAritmeticaComponent,
    TaTeTiComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    PuntajesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
