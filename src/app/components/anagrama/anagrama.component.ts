import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {

  palabraAnagrama:string;
  palabraUsuario:string;

  puntaje = 0 ;

  usuario:any;

  constructor(private auth: AngularFireAuth,private router: Router,private afs : AngularFirestore) { 
    this.palabraAnagrama = this.seleccionarPalabra();
  }

  ngOnInit(): void {
    
  }

  esAnagrama(palabra, posibleAnagrama){
    //Si desde un principio son iguales, regresamos false; ya que no tienen orden distinto
    if(palabra.toLowerCase() === posibleAnagrama.toLowerCase()) return false;
    
    return palabra.toLowerCase().split("").sort().join("") === posibleAnagrama.toLowerCase().split("").sort().join("");
  }

   palabrasYPosiblesAnagramas = [
    {
      palabra: "Hola",
      posibleAnagrama: "aloh"
    },
    {
      palabra: "Frase",
      posibleAnagrama: "fresa"
    },
    {
      palabra: "Escandalizar",
      posibleAnagrama: "zascandilear"
    },
    {
      palabra: "Conservadora",
      posibleAnagrama: "conversadora"
    },
    {
      palabra: "Perro",
      posibleAnagrama: "rerpo"
    },
    {
      palabra: "Gesto",
      posibleAnagrama: "tosge"
    },
  ];

  palabras = ["aloh","fresa","zascandilear","conversadora","rerpo","tosge"];


  corroborarAnagrama(e){
    var datos = this.esAnagrama(this.palabraAnagrama,this.palabraUsuario);
    //console.log(this.palabraUsuario);
    if(datos == true)
    {
      alert("CORRECTO!!");
      this.puntaje = this.puntaje + 10;
      this.palabraAnagrama = this.seleccionarPalabra();
    }
    else{

      alert("GAME OVER!!");
      this.guardarPuntaje();
      this.router.navigateByUrl('');
    }
  }

  seleccionarPalabra(){
    for (var n = 0; n < this.palabras.length; n++) {
      return this.palabras[Math.floor(Math.random() * this.palabras.length)];
      
    }
  }

  guardarPuntaje(){

    const random = Math.floor(Math.random() * 100000000) + 1
    
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    
    const ID = String(random).concat(this.usuario.email);

    const puntaje = {
      id: ID,
      juego: "anagrama", 
      jugador: this.usuario.email,
      puntaje: this.puntaje
      
    };


    //console.log(puntaje);
    try {

      const insert =  this.afs.collection('puntajes').doc(ID).set(puntaje);

      console.log(insert);

    } catch (error) {

      console.log(error);
      this.router.navigateByUrl('');

    }

  }

}
