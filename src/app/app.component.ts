import { Component } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
  componentes : Componente[] = [
    {
      icon: 'home-outline',
      name: 'Inicio',
      redirecTo: '/inicio'
    },
    {
      icon: 'people-outline',
      name: 'Quiénes Somos',
      redirecTo: '/about'
    },
    {
      icon: 'earth-outline',
      name: 'Sismos',
      redirecTo: '/api'
    },
    
  ];

  salir(){
    return localStorage.removeItem('ingresado')
  }
  
}
