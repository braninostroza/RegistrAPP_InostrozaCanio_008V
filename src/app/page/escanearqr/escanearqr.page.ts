import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';



@Component({
  selector: 'app-escanearqr',
  templateUrl: './escanearqr.page.html',
  styleUrls: ['./escanearqr.page.scss'],
})
export class EscanearqrPage implements OnInit {

  scanActive: boolean = false;

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu()
  {
    this.menuController.open('first');
  }
  // Verifica si se tiene permiso para usar la cámara
  async checkPermission() {
    return new Promise(async (resolve, reject) => {
      const status = await BarcodeScanner.checkPermission({ force: true }); // Verifica el estado del permiso para usar la cámara
      if (status.granted) {
        resolve(true); // Si el permiso está concedido, se devuelve true
      } else if (status.denied) {
        BarcodeScanner.openAppSettings(); // Si el permiso está denegado, se abre la configuración de la aplicación
        resolve(false); // Se devuelve false
      }
    });
  }

  async startScanner() {
    // Verificar si se le ha permitido al usuario escanear
    const allowed = await this.checkPermission();
  
    if (allowed) {
      // Activar el escáner y ocultar el fondo
      this.scanActive = true;
      BarcodeScanner.hideBackground();
  
      // Iniciar el escaneo
      const result = await BarcodeScanner.startScan();
  
      if (result.hasContent) {
        // Si se encuentran datos, desactivar el escáner y alertar al usuario con los datos encontrados
        this.scanActive = false;
        alert(result.content);
  
      } else {
        // Si no se encuentran datos, alertar al usuario
        alert('¡NO SE ENCONTRÓ DATOS!');
      }
    } else {
      // Si no se ha permitido al usuario escanear, alertar al usuario
      alert('¡NO PERMITIDO!');
    }
  }

  // Detener el escaneo y desactivar el escáner
  stopScanner() {
    BarcodeScanner.stopScan();
    this.scanActive = false;
  }

  // Cuando se navega fuera de la vista actual, detener el escaneo y desactivar el escáner
  ionViewWillLeave() {
    BarcodeScanner.stopScan();
    this.scanActive = false;
  }

}
