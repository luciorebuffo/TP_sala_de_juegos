import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-ta-te-ti',
  templateUrl: './ta-te-ti.component.html',
  styleUrls: ['./ta-te-ti.component.css']
})
export class TaTeTiComponent implements OnInit {

  lugares = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
  resultado: string;
  espacio = 0;

  //VAR TS

  random;
  
  tateti = ["-", "-", "-"];
  movimientos = 0;
  usuario = "-";
  maquina = "-";
  botonesEleccion : boolean = false;
  botonesJuego : boolean = true;
  terminoJuego : boolean;
  band : boolean;
  nombreJugador : string;

  
  user:any;

  constructor(private auth: AngularFireAuth,private router: Router,private afs : AngularFirestore) {
    this.terminoJuego = true;
   }

  ngOnInit(): void {
  }

  verificarJuego() {
    console.log(this.resultado);

  }

  signo(signo, jugador) {
    let x: string = "";

    if (this.lugares[0] == signo && this.lugares[1] == signo && this.lugares[2] == signo) {
        if (jugador == "jugador") {
            x = "Gano";
        }
        if (jugador == "maquina") {
            x = "Perdio";
        }
    }
    else if (this.lugares[3] == signo && this.lugares[4] == signo && this.lugares[5] == signo) {
        if (jugador == "jugador") {
            x = "Gano";
        }
        if (jugador == "maquina") {
            x = "Perdio";
        }
    }
    else if (this.lugares[6] == signo && this.lugares[7] == signo && this.lugares[8] == signo) {
        if (jugador == "jugador") {
            x = "Gano";
        }
        if (jugador == "maquina") {
            x = "Perdio";
        }

    }
    else if (this.lugares[0] == signo && this.lugares[3] == signo && this.lugares[6] == signo) {
        if (jugador == "jugador") {
            x = "Gano";
        }
        if (jugador == "maquina") {
            x = "Perdio";
        }

    }
    else if (this.lugares[1] == signo && this.lugares[4] == signo && this.lugares[7] == signo) {
        if (jugador == "jugador") {
            x = "Gano";
        }
        if (jugador == "maquina") {
            x = "Perdio";
        }

    }
    else if (this.lugares[2] == signo && this.lugares[5] == signo && this.lugares[8] == signo) {
        if (jugador == "jugador") {
            x = "Gano";
        }
        if (jugador == "maquina") {
            x = "Perdio";
        }
    }
    else if (this.lugares[0] == signo && this.lugares[4] == signo && this.lugares[8] == signo) {
        if (jugador == "jugador") {
            x = "Gano";
        }
        if (jugador == "maquina") {
            x = "Perdio";
        }
    }
    else if (this.lugares[2] == signo && this.lugares[4] == signo && this.lugares[6] == signo) {
        if (jugador == "jugador") {
            x = "Gano";
        }
        if (jugador == "maquina") {
            x = "Perdio";
        }
    }

    for (let i = 0; i < 10; i++) {
        if (this.lugares[i] != "-") {
            this.espacio = this.espacio + 1;
        }
    }
    
    if (x == "" && this.espacio == 10)
        x = "Empate";

    this.espacio = 0;
    console.log(x);
    return x;
  }


  //LOGICA TS

  eleccionSigno(signo) {
    this.botonesEleccion = true;
    this.botonesJuego = false;
    if (signo == "X") {
      this.usuario = "X";
      this.maquina = "O";
    }
    else {
      this.usuario = "O";
      this.maquina = "X";
    }
  }

  modificar(id) {
    if (this.lugares[id] == '-') {
      this.lugares[id] = this.usuario;

      document.images['rc' + id].src = "assets/images/" + this.usuario + ".gif";
      document.images['rc' + id].alt = this.usuario;

      this.maquinamov();
    }
  }
  

  maquinamov()
  {
    
        this.resultado = this.signo(this.usuario, "jugador");
    
        if (this.resultado == "Gano" || this.resultado == "Perdio" || this.resultado == "Empate")
        {
          this.band = true;
          (<HTMLInputElement>document.getElementById("botonUno")).disabled = true;
          (<HTMLInputElement>document.getElementById("botonDos")).disabled = true;
          (<HTMLInputElement>document.getElementById("botonTres")).disabled = true;
          (<HTMLInputElement>document.getElementById("botonCuatro")).disabled = true;
          (<HTMLInputElement>document.getElementById("botonCinco")).disabled = true;
          (<HTMLInputElement>document.getElementById("botonSeis")).disabled = true;
          (<HTMLInputElement>document.getElementById("botonSiete")).disabled = true;
          (<HTMLInputElement>document.getElementById("botonOcho")).disabled = true;
          (<HTMLInputElement>document.getElementById("botonNueve")).disabled = true;
          this.terminoJuego = false;
          alert(this.resultado);
          this.guardarPuntaje();
          this.router.navigateByUrl('');
          
        }
        else
          this.jugar();
    
  }
    
      jugar() 
      {
        this.random = Math.floor(Math.random() * 8);
        if (this.lugares[this.random] == "-") {
          this.lugares[this.random] = this.maquina;
          document.images['rc' + this.random].src = "assets/images/" + this.maquina + ".gif";
          document.images['rc' + this.random].alt = this.maquina;
    
          this.resultado = this.signo(this.maquina, "maquina");
    
          console.log(this.resultado);

          if (this.resultado == "Gano" || this.resultado == "Perdio" || this.resultado == "Empate")
          {
            console.log(this.resultado);
              this.band = true;
              (<HTMLInputElement>document.getElementById("botonUno")).disabled = true;
              (<HTMLInputElement>document.getElementById("botonDos")).disabled = true;
              (<HTMLInputElement>document.getElementById("botonTres")).disabled = true;
              (<HTMLInputElement>document.getElementById("botonCuatro")).disabled = true;
              (<HTMLInputElement>document.getElementById("botonCinco")).disabled = true;
              (<HTMLInputElement>document.getElementById("botonSeis")).disabled = true;
              (<HTMLInputElement>document.getElementById("botonSiete")).disabled = true;
              (<HTMLInputElement>document.getElementById("botonOcho")).disabled = true;
              (<HTMLInputElement>document.getElementById("botonNueve")).disabled = true;
              this.terminoJuego = false;
              alert(this.resultado);
              this.guardarPuntaje();
              this.router.navigateByUrl('');
              
             
          }  
        }
        else {
          this.jugar();
        }
      }

  reiniciarJuego()
  {
    document.images['rc0'].src = "assets/images/nothing.gif";
    document.images['rc1'].src = "assets/images/nothing.gif";
    document.images['rc2'].src = "assets/images/nothing.gif";
    document.images['rc3'].src = "assets/images/nothing.gif";
    document.images['rc4'].src = "assets/images/nothing.gif";
    document.images['rc5'].src = "assets/images/nothing.gif";
    document.images['rc6'].src = "assets/images/nothing.gif";
    document.images['rc7'].src = "assets/images/nothing.gif";
    document.images['rc8'].src = "assets/images/nothing.gif";
    (<HTMLInputElement>document.getElementById("botonUno")).disabled = false;
    (<HTMLInputElement>document.getElementById("botonDos")).disabled = false; 
    (<HTMLInputElement>document.getElementById("botonTres")).disabled = false;
    (<HTMLInputElement>document.getElementById("botonCuatro")).disabled = false;
    (<HTMLInputElement>document.getElementById("botonCinco")).disabled = false;
    (<HTMLInputElement>document.getElementById("botonSeis")).disabled = false;
    (<HTMLInputElement>document.getElementById("botonSiete")).disabled = false;
    (<HTMLInputElement>document.getElementById("botonOcho")).disabled = false;
    (<HTMLInputElement>document.getElementById("botonNueve")).disabled = false;
    this.terminoJuego = true;
    this.botonesJuego = true;
    this.botonesEleccion = false;
    
   
  }

  guardarPuntaje(){

    const random = Math.floor(Math.random() * 100000000) + 1
    
    this.user = JSON.parse(localStorage.getItem('usuario'));
    
    const ID = String(random).concat(this.user.email);

    const puntaje = {
      id: ID,
      juego: "tateti", 
      jugador: this.user.email,
      puntaje: this.resultado
      
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
