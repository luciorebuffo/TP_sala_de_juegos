import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


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

  constructor(private router: Router) { this.puntaje = 0}

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
        alert("Perdiste! Puntaje: "+this.puntaje);
        this.router.navigateByUrl("");
        
      }

  }

  
}
