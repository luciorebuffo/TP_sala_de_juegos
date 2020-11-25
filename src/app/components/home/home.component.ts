import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuario:any;

  

  constructor(private auth: AngularFireAuth,private router: Router,private afs : AngularFirestore) {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
   }

  ngOnInit(): void {
    
    
    
    
  }

  anagrama(){
    this.router.navigateByUrl("Anagrama");
  }
  ppt(){
    this.router.navigateByUrl("PPT");
  }
  adivinar(){
    this.router.navigateByUrl("JuegoAdivina");
  }
  tateti(){
    this.router.navigateByUrl("TaTeTi");
  }
  aritmetica(){
    this.router.navigateByUrl("AgilidadAritmetica");
  }
  juegoPropio(){
    this.router.navigateByUrl("JuegoPropio");
  }


  logout(){

    const data = {
      email: null,
      password: null,
      estado: false
      
    }

    localStorage.setItem('usuario',JSON.stringify(data));

    this.router.navigateByUrl('Login');
    

  }

  
  


}

  


