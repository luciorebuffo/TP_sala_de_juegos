import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-juego-propio',
  templateUrl: './juego-propio.component.html',
  styleUrls: ['./juego-propio.component.css']
})
export class JuegoPropioComponent implements OnInit {

  WIDTH = 400;
  HEIGH = 400;
  X= this.getRandomNumber(this.WIDTH);
  Y= this.getRandomNumber(this.HEIGH);
    

  target = {
    x: this.X,
    y: this.Y,
  }

  clicks = 0;
  map:any;
  distance:any;
  distanceHint="";

  user:any;

  constructor(private auth: AngularFireAuth,private router: Router,private afs : AngularFirestore) { }

  ngOnInit(): void {
    this.map = <HTMLInputElement>document.querySelector('#map');
    this.distance = <HTMLInputElement>document.querySelector('#distance');

    /*console.log(this.map);
    console.log(this.distance);*/
  }

  buscar(e){
    
    this.clicks++;
      this.distance = this.getDistance(e, this.target);
      this.distanceHint = this.getDistanceHint(this.distance);
      

      if (this.distance < 20 ) {
        alert(`Encontraste el tesoro en ${this.clicks} clicks!`);
        this.guardarPuntaje();
        this.router.navigateByUrl('');
        
      }

  }

    

    
    /*map.addEventListener('click', function (e) {
      console.log('click');
      this.clicks++;
      const distance = this.getDistance(e, this.target);
      const distanceHint = this.getDistanceHint(distance);
      distance.innerHTML = `<h1>${distanceHint}</h1>`;

      if (distance < 20 ) {
        alert(`Found the treasure in ${this.clicks} clicks!`);
        location.reload();
      }
    });*/


    //Helper

    getRandomNumber(size){
      return Math.floor(Math.random() * size);
    }
    
    // get the Distance of two points
    getDistance = (e, target) => {
      let diffX = e.offsetX - target.x;
      let diffY = e.offsetY - target.y;
      return Math.sqrt((diffX * diffX) + (diffY * diffY));
    }
    
    // return an String depending on the distances 
    getDistanceHint = distance => {
      if (distance < 30) {
        return "MUY CALIENTE!";
      } else if (distance < 40) {
        return "Realmente Caliente";
      } else if (distance < 60) {
        return "Caliente";
      } else if (distance < 100) {
        return "Tibio";
      } else if (distance < 180) {
        return "Frio";
      } else if (distance < 360) {
        return "Realmente Frio";
      } else {
        return "Congelado!";
      }
    }

    guardarPuntaje(){

      const random = Math.floor(Math.random() * 100000000) + 1
      
      this.user = JSON.parse(localStorage.getItem('usuario'));
      
      const ID = String(random).concat(this.user.email);
  
      const puntaje = {
        id: ID,
        juego: "tesoro", 
        jugador: this.user.email,
        puntaje: this.clicks
        
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
