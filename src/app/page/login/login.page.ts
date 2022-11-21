import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from '../../services/registroservice.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;
  usuarios : Usuario[] = [];

  constructor(private alertController: AlertController,
              private navController: NavController,
              private toast: ToastController,
              private registroService: RegistroserviceService,
              private fb: FormBuilder) { 
                this.formularioLogin = this.fb.group({
                  'correo': new FormControl("", [Validators.required, Validators.email]),
                  'password': new FormControl("", Validators.compose([
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(12)
                  ])),
                })
              }

  ngOnInit() {
  }
  
  async Ingresar(){
    var f = this.formularioLogin.value;
    var a=0;
    this.registroService.getUsuarios().then(datos=>{ 
      this.usuarios = datos; 
      if (!datos || datos.length==0){
        return null;
      }
      for (let obj of this.usuarios){
        if (f.correo == obj.correo && f.password==obj.pass){
          a=1;
          console.log('ingresado');
          localStorage.setItem('ingresado','true');
          localStorage.setItem('nombre',obj.nombre);
          this.navController.navigateRoot('inicio');
          this.showToast('Bienvenido '+obj.nombre);
          localStorage.setItem('rol',obj.rol);

        }
      }
      if(a==0){
        this.alertMsg();
      }
    })
  }

  async alertMsg(){
    const alert = await this.alertController.create({
      header: 'Error...',
      message: 'Los datos ingresados son incorrectos',
      buttons: ['Aceptar']
    })
    await alert.present();
    return;
  }

  async showToast(msg){
    const toast = await this.toast.create({
      message: msg,
      duration: 2000
    })
    await toast.present();
  } 
  
}
