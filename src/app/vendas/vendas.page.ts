import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.page.html',
  styleUrls: ['./vendas.page.scss'],
})
export class VendasPage {
  venda1: number=0;
  venda2: number=0;
  total: number=0;
  pagamento: string='';
  porcentagem: number=0;
  valorFinal: number=0;

  constructor() {
  }

  calcularTotal() {
    console.log(this.venda1 + this.venda2 === this.total)
  }

  calcularValorFinal() {
    this.total = this.venda1 + this.venda2 // antes: (não tinha)
    if (this.total) {
      if (this.pagamento === 'pix') {
        this.porcentagem = this.total * 10/100;
        this.valorFinal = this.total - this.porcentagem; // antes: this.valorFinal = this.porcentagem - this.total
      } else if (this.pagamento === 'credito') {
        this.porcentagem = this.total * 10/100;
        this.valorFinal = this.total + this.porcentagem; // antes: this.porcentagem + this.total
      } else if (this.pagamento === 'debito') {
        this.valorFinal = this.total; // antes: this.total = this.valorFinal;
      } else {
        console.log ('valor inválido')
      }
      }
    }
  }
