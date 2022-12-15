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
  public rol: string;
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
    {
      icon: 'accessibility-outline',
      name: 'Asistencia',
      redirecTo: '/asistencia'
    },
    //{
      //icon: 'earth-outline',
      //name: 'Escanear QR',
      //redirecTo: '/escanearqr'
    //},
    
  ];

  salir(){
     return localStorage.clear();
  }

  docente(){
    if((this.rol=localStorage.getItem('rol')) == 'Docente'){
      return true; 
    }
    else
    {
    return false;
    }
  }

  estudiante(){
    if((this.rol=localStorage.getItem('rol')) == 'Estudiante'){
      return true; 
    }
    else
    {
    return false;
    }
  }

}

