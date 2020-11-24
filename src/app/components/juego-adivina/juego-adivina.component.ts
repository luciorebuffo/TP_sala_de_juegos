import { Component, OnInit } from '@angular/core';

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

  puntaje = 100;

  constructor() {

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
      
      
     

    }else{

      let mensaje:string;
      switch (this.contador) {
        case 1:
          this.puntaje--;
          mensaje="No, intento fallido, animo";
          break;
          case 2:
          this.puntaje--;
          mensaje="No,Te estaras Acercando???";
          break;
          case 3:
          this.puntaje--;
          mensaje="No es, Yo crei que la tercera era la vencida.";
          break;
          case 4:
          this.puntaje--;
          mensaje="No era el  "+this.numeroIngresado;
          break;
          case 5:
          this.puntaje--;
          mensaje=" intentos y nada.";
          break;
          case 6:
          this.puntaje--;
          mensaje="Afortunado en el amor";
          break;
        default:
          this.puntaje--;
            mensaje="Ya le erraste "+ this.contador+" veces";
          break;
      }
      alert(this.contador+" "+mensaje+" ayuda :"+this.retornarAyuda());
     

    }
    console.info("numero Secreto:",this.numeroSecreto);  
  }

  checkGanoPerdio(){
    if(this.puntaje == 0){
      alert("100 veces perdiste salame!");
    }
  }



}
