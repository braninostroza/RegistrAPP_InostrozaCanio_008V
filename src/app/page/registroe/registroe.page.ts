import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registroe',
  templateUrl: './registroe.page.html',
  styleUrls: ['./registroe.page.scss'],
})
export class RegistroePage implements OnInit {

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
