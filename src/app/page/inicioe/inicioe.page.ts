import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicioe',
  templateUrl: './inicioe.page.html',
  styleUrls: ['./inicioe.page.scss'],
})
export class InicioePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  usuario = {
    email: '',
    password:''
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }

}
