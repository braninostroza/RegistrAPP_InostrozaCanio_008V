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
  lista={
    asignatura:'',
    fecha:'',
  }

  ngOnInit() {
  }

  mostrarMenu()
  {
    this.menuController.open('first');
  }

  GenerarQr(){
    this.qrCodeString=this.lista.asignatura+'\n'
    +this.lista.fecha;
  }
  verQr(){
    this.scannedResult=this.qrCodeString;


  }
}
