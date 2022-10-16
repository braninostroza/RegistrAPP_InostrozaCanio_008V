import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ApiService} from '../../services/api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {

  sismos: any;

  constructor(private menuController: MenuController, private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getTopSismos().subscribe(resp => {
      console.log('sismos', resp);
      this.sismos = resp;
    })
  }

  mostrarMenu()
  {
    this.menuController.open('first');
  }


}
