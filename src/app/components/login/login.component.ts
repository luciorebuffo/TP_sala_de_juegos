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
  usuarios:any;
  Data:any;

  signUpButton = document.getElementById('signUp');
  signInButton = document.getElementById('signIn');
  container;

  constructor(private auth: AngularFireAuth,private router: Router,private afs : AngularFirestore) { }

  ngOnInit(): void {
    console.log(this.auth);
    this.container = <HTMLInputElement>document.getElementById('container');
  }

  //Display
activarRegistro(){
  this.container.classList.add("right-panel-active");

}
activarLogin(){
  this.container.classList.remove("right-panel-active");

}

//Codigo Login
 async Login(e){
  console.log("Estoy en Login y los datos son : "+this.email+this.password);

  try {

    const rta = await this.auth.signInWithEmailAndPassword(this.email,this.password);

    console.log(rta);

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
    this.router.navigateByUrl('');
    localStorage.setItem('usuario',JSON.stringify(this.Data));


  });

  
}

//Codigo Registro
  async Registro(e){
    console.log("Estoy en Registro y los datos son : "+this.email+this.password);

    //GUARDO EN AUTENTICAR
    try {

      const rta = await this.auth.createUserWithEmailAndPassword(this.email,this.password);
      
      console.log(rta);

      this.router.navigateByUrl("Menu");
      
    } catch (error) {
      console.log(error);
    }

    //GUARDO EN CLOUD FIRESTORE
    try {

      const insert =  this.afs.collection('usuarios').doc(this.email).set({

        email : this.email

      });

      console.log(insert);

    } catch (error) {

      console.log(error);

    }

    this.Login(e);
  }

}
