import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-crearqr',
  templateUrl: './crearqr.page.html',
  styleUrls: ['./crearqr.page.scss'],
})
export class CrearqrPage implements OnInit {

  qrCodeString ="";
  scannedResult: any;
  constructor(private menuController: MenuController) { }
  usuario={
    nom:'',
  }

  ngOnInit() {
  }

  mostrarMenu()
  {
    this.menuController.open('first');
  }

  GenerarQr(){
    this.qrCodeString=this.usuario.nom;
  }
  verQr(){
    this.scannedResult=this.qrCodeString;


  }
}
