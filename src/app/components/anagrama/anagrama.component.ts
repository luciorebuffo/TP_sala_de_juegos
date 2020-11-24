import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {

  palabraAnagrama:string;
  palabraUsuario:string;

  constructor() { 
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
    }
    else{
      alert("PALABRA INCORRECTA!!");
    }
  }

  seleccionarPalabra(){
    for (var n = 0; n < this.palabras.length; n++) {
      return this.palabras[Math.floor(Math.random() * this.palabras.length)];
      
    }
  }

}
