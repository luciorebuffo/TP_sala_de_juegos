import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-puntajes',
  templateUrl: './puntajes.component.html',
  styleUrls: ['./puntajes.component.css']
})
export class PuntajesComponent implements OnInit {

  resultadosAdivina = [];
  resultadosAgilidad = [];
  resultadosAnagrama = [];
  resultadosPPT = [];
  resultadosTateti = [];
  resultadosTesoro = [];
  resultados : Observable<any>;
  filtroJuego : string = "";

  constructor(private auth: AngularFireAuth,private router: Router,private afs : AngularFirestore) {
    this.traerDatosAdivina();
    this.traerDatosAgilidad();
    this.traerDatosAnagrama();
    this.traerDatosPPT();
    this.traerDatosTaTeTi();
    this.traerDatosTesoro();
   }

  ngOnInit(): void {
  }

  traerDatosAdivina(){
    const doc =  this.afs.collection('puntajes',ref => ref.where('juego','==', 'adivina' ));

    doc
    .valueChanges()
    .subscribe(data =>{
      this.resultadosAdivina = data;
      //console.log(this.resultadosAdivina);
      //console.log(this.Mascotas);
    })

  }

  traerDatosAgilidad(){
    const doc =  this.afs.collection('puntajes',ref => ref.where('juego','==', 'aritmetica' ));

    doc
    .valueChanges()
    .subscribe(data =>{
      this.resultadosAgilidad = data;
      //console.log(this.resultadosAgilidad);
      //console.log(this.Mascotas);
    })

  }
  traerDatosPPT(){
    const doc =  this.afs.collection('puntajes',ref => ref.where('juego','==', 'PPT' ));

    doc
    .valueChanges()
    .subscribe(data =>{
      this.resultadosPPT = data;
      //console.log(this.resultadosPPT);
      //console.log(this.Mascotas);
    })

  }
  traerDatosAnagrama(){
    const doc =  this.afs.collection('puntajes',ref => ref.where('juego','==', 'anagrama' ));

    doc
    .valueChanges()
    .subscribe(data =>{
      this.resultadosAnagrama = data;
      //console.log(this.resultadosAnagrama);
      //console.log(this.Mascotas);
    })

  }
  traerDatosTaTeTi(){
    const doc =  this.afs.collection('puntajes',ref => ref.where('juego','==', 'tateti' ));

    doc
    .valueChanges()
    .subscribe(data =>{
      this.resultadosTateti = data;
      //console.log(this.resultadosTateti);
      //console.log(this.Mascotas);
    })

  }
  traerDatosTesoro(){
    const doc =  this.afs.collection('puntajes',ref => ref.where('juego','==', 'tesoro' ));

    doc
    .valueChanges()
    .subscribe(data =>{
      this.resultadosTesoro = data;
      //console.log(this.resultadosTateti);
      //console.log(this.Mascotas);
    })

  }

  volver(){
    this.router.navigateByUrl('');
  }

}
