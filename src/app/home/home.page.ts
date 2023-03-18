import { Component } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  altura: number=0;
  sexo: string='';
  pesoIdeal: number=0;


  constructor(private toastController: ToastController, private alertController: AlertController) {}

  calcularPesoIdeal() {
    if (this.altura && this.sexo) {
      if (this.sexo === 'M') {
        this.pesoIdeal = 72.7 * this.altura - 58;
      } else if (this.sexo === 'F') {
        this.pesoIdeal = 62.1 * this.altura - 44.7;
      } else {
        console.log('Sexo inválido');
      }
    }
  }
}



