import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private menuController: MenuController, 
    private alertController: AlertController) { }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }
  //método que ingresa datos 
  async Estudiante() {
    const alert = await this.alertController.create({
      header: 'Ingrese sus datos',
      buttons: ['Iniciar Sesión'],
      inputs: [
        {
          placeholder: 'Correo',
        },
        {
          placeholder: 'Contraseña',
          attributes: {
            maxlength: 8,
          },
        },
      ],
    });

    await alert.present();
  }

}
