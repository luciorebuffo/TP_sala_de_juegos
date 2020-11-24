import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  email:string;
  password:string;
  tipo:string;

  usuarios;

  constructor(private auth: AngularFireAuth,private router: Router,private afs : AngularFirestore) { }

  ngOnInit(): void {
  }

  async registro(e){

    //GUARDO EN AUTENTICAR
    try {

      const rta = await this.auth.createUserWithEmailAndPassword(this.email,this.password);
      
      console.log(rta);

      this.router.navigateByUrl("");
      
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
  }

}
