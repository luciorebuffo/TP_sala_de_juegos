import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-juego-adivina',
  templateUrl: './juego-adivina.component.html',
  styleUrls: ['./juego-adivina.component.css']
})
export class JuegoAdivinaComponent implements OnInit {

  numeroSecreto = 0;
  numeroIngresado; 
  
  gano;

  contador=0;

  Mensajes = "";

  ayuda = "";

  puntaje = 100;

  usuario:any;
  
  constructor(private auth: AngularFireAuth,private router: Router,private afs : AngularFirestore) {

    this.generarnumero();
    console.log(this.numeroSecreto);

     
        
  }
  ngOnInit(): void {

    this.checkGanoPerdio();
    
  }

  //FUNCIONES DE LA CLASE
  generarnumero() {
    this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
    console.info('numero Secreto:' + this.numeroSecreto);
    this.gano = false;
  }
  
  retornarAyuda() {
    if (this.numeroIngresado < this.numeroSecreto) {
      return "Falta";
    }
    return "Te pasate";
  }

  verificar() {
    if (this.numeroIngresado == this.numeroSecreto) {
      this.gano = true;
      
    }
    if (this.gano) {
      return true;
    } else {
      return false;
    }
 }

 //FUNCIONES DEL TS

  juego()
  {
    this.contador++;
    
    
    if (this.verificar()){
      
      
      alert("Ganaste!! Puntaje: "+this.puntaje);
      this.guardarPuntaje();
      this.router.navigateByUrl('');
      
     

    }else{

      
      switch (this.contador) {
        case 1:
          this.puntaje--;
          this.Mensajes="No, intento fallido, animo";
          break;
          case 2:
          this.puntaje--;
          this.Mensajes="No,Te estaras Acercando???";
          break;
          case 3:
          this.puntaje--;
          this.Mensajes="No es, Yo crei que la tercera era la vencida.";
          break;
          case 4:
          this.puntaje--;
          this.Mensajes="No era el  "+this.numeroIngresado;
          break;
          case 5:
          this.puntaje--;
          this.Mensajes=" intentos y nada.";
          break;
          case 6:
          this.puntaje--;
          this.Mensajes="Afortunado en el amor";
          break;
        default:
          this.puntaje--;
          this.Mensajes="Ya le erraste "+ this.contador+" veces";
          break;
      }
      //alert(this.contador+" "+this.Mensajes+" ayuda :"+this.retornarAyuda());
      this.ayuda = this.retornarAyuda();
     

    }
    console.info("numero Secreto:",this.numeroSecreto);  
  }

  checkGanoPerdio(){
    if(this.puntaje == 0){
      alert("100 veces perdiste salame!");
      this.guardarPuntaje();
      this.router.navigateByUrl('');
    }
  }

  guardarPuntaje(){

    const random = Math.floor(Math.random() * 100000000) + 1
    
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    
    const ID = String(random).concat(this.usuario.email);

    const puntaje = {
      id: ID,
      juego: "adivina", 
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
