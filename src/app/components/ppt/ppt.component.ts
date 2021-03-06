import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css']
})
export class PPTComponent implements OnInit {

  result: string;
  pointsUser = 0;
  pointsComp =  0;
  puntaje = 0 ;
  usuario:any;

  constructor(private auth: AngularFireAuth,private router: Router,private afs : AngularFirestore) { }

  ngOnInit(): void {
    this.result = 'Esperando jugada...';
    console.log(this.pointsUser);

   

    

    
  }

  testJuego(){
    if(this.pointsUser == 5){
      alert("Ganaste!");
      this.guardarPuntaje("gano");
      this.router.navigateByUrl('');
      

    }
    if(this.pointsComp == 5){
      alert("Perdiste! :(");
      this.guardarPuntaje("perdio");
      this.router.navigateByUrl('');
    }
  }



  /**
   * Math Random para generar un random y multiplicamos por 3
   * Redondeamos el entero superior, quedando 0,1,2 como posibles resultados
   * y con ello selecciona Piedra (r), Papel (p) ó Tijera (s)
   */
  getComputerChoice(): string {
    const choices = ['r', 'p', 's']; // Roca, Pape, Tijeras
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
  }

  game(
    userChoice: string
  ): {
    message: string;
    userAdd: number;
    compAdd: number;
  } {

    const playUserComp = userChoice + this.getComputerChoice();
    console.log(`Jugada realizada: ${playUserComp}`);
      
    let playStatus: {
      message: string;
      userAdd: number;
      compAdd: number;
    };
    switch (playUserComp) {
      // Ganamos
      case 'rs':
      case 'sp':
      case 'pr':
        playStatus = {
          message: 'Ganas a la computadora',
          userAdd: 1,
          compAdd: 0,
        };
        this.puntaje = this.puntaje + 2;
        break;
      // Gana la computadora
      case 'rp':
      case 'ps':
      case 'sr':
        playStatus = {
          message: 'Gana la computadora',
          userAdd: 0,
          compAdd: 1,
        };
        break;
      // Empatamos
      case 'rr':
      case 'pp':
      case 'ss':
        playStatus = {
          message: 'Eligen lo mismo y empatan',
          userAdd: 0,
          compAdd: 0,
          
        };
        this.puntaje++;
        break;
    }
    return playStatus;
  }

  play(choice: string): void {
    const result = this.game(choice);
    this.result = result.message;
    this.pointsUser += result.userAdd;
    this.pointsComp += result.compAdd;
    this.testJuego();
  }


  guardarPuntaje(Gano){

    const random = Math.floor(Math.random() * 100000000) + 1
    
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    
    const ID = String(random).concat(this.usuario.email);

    const puntaje = {
      id: ID,
      juego: "PPT", 
      jugador: this.usuario.email,
      gano: Gano,
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
