import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iniciod',
  templateUrl: './iniciod.page.html',
  styleUrls: ['./iniciod.page.scss'],
})
export class IniciodPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  usuario = {
    email: '',
    code:'',
    password:''
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }
}
