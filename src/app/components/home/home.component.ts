import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuario:string;
  password:string;

  constructor(private auth: AngularFireAuth,private router: Router) { }

  ngOnInit(): void {
    console.log(this.auth);
    
  }

  

}
