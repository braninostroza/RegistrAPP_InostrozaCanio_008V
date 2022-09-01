import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
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
