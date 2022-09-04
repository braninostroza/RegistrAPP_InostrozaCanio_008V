import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrod',
  templateUrl: './registrod.page.html',
  styleUrls: ['./registrod.page.scss'],
})
export class RegistrodPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  usuario = {
    nombre:'',
    institucion:'',
    edad:'',
    telefono:'',
    email: '',
    password:'',
    passwors2:''
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }

}
