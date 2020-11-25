import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {

  numeroUno;
  numeroDos;
  cuenta = "";

  sigueJugando;

  repetidor;

  Tiempo = 10;

  respuesta;

  rtdo;

  puntaje;

  txtAdivina;

  usuario:any;

  constructor(private auth: AngularFireAuth,private router: Router,private afs : AngularFirestore) { 
    this.puntaje = 0;
    
    
  }

  ngOnInit(): void {
    
    this.juego();
    
  }

  generarNumero(){
    const random = Math.floor(Math.random() * 10) + 1

    return random;
  }

  generarArit(){
    const caso = Math.floor(Math.random() * 4) + 1

    switch (caso) {
      case 1:
        
        this.cuenta = "+";
        console.log(this.cuenta);
        break;
      case 2:
        
        this.cuenta = "-";
        console.log(this.cuenta);
        break;
      case 3:
        
        this.cuenta = "*";
        console.log(this.cuenta);
        break;
      case 4:
        
        this.cuenta = "/";
        console.log(this.cuenta);
        break;
      
    }

  }

  

  juego(){

    
    this.numeroUno = this.generarNumero();
    this.numeroDos = this.generarNumero();
    this.generarArit();
    
    this.repetidor = setInterval(()=>{ 
      
      this.Tiempo--;

      console.log("llego", this.Tiempo);

      if(this.Tiempo==0 ) {
        clearInterval(this.repetidor);
        //this.verificar();
        //this.ocultarVerificar=true;
        alert("Perdiste! Puntaje: "+this.puntaje);
        this.guardarPuntaje();
        this.router.navigateByUrl("");
       
      }
      }, 900);

      
  }

  resultado(){

    
    
    
    switch (this.cuenta) {
      case "+":
        
        this.rtdo = this.numeroUno + this.numeroDos;
        
        break;
      case "-":
        
        this.rtdo = this.numeroUno - this.numeroDos;
        
        break;
      case "*":
        
        this.rtdo = this.numeroUno * this.numeroDos;
        
        break;
      case "/":
        
        
        this.rtdo = this.numeroUno / this.numeroDos;
        break;
      
      }

      if(this.respuesta == this.rtdo){
          this.puntaje = this.puntaje +10;
          this.Tiempo = 10;
          clearInterval(this.repetidor);
          
          this.juego();
      }
      else{
        
        clearInterval(this.repetidor);
        this.guardarPuntaje();
        alert("Perdiste! Puntaje: "+this.puntaje);
        this.router.navigateByUrl("");
        
      }

  }

  guardarPuntaje(){

    const random = Math.floor(Math.random() * 100000000) + 1
    
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    
    const ID = String(random).concat(this.usuario.email);

    const puntaje = {
      id: ID,
      juego: "aritmetica", 
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
