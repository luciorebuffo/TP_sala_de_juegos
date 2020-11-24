import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  password:string;
  

  usuarios;

  Data;

  constructor(private auth: AngularFireAuth,private router: Router,private afs : AngularFirestore) { }

  ngOnInit(): void {
  }

  async login(e){

    
    
    //login EN CLOUD FIRESTORE
    try {

      const rta = await this.auth.signInWithEmailAndPassword(this.email,this.password);

      //console.log(rta);

      this.setStorage();
      
      
      
    } catch (error) {
      console.log(error);

      this.Data = {
        email: null,
        password: null,
        estado: false
      }
      localStorage.setItem('usuario',JSON.stringify(this.Data));
    }

    
    
  }

  async setStorage(){

    const doc = await this.afs.collection('usuarios').doc(this.email);

    doc.valueChanges().subscribe(usuario => {
      
      this.Data = {
        email: this.email,
        password: this.password,
        estado: true
      }

      localStorage.setItem('usuario',JSON.stringify(this.Data));

  
    });

    
  }

}
