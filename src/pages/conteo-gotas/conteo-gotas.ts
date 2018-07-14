import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-conteo-gotas',
  templateUrl: 'conteo-gotas.html',
})
export class ConteoGotasPage {

  data = {
    ml: '',
    horas: '',
    constante: '',
    resultado: 0
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) { }

  ionViewDidLoad() { }

  resultado() {
    console.log("Entry data:", this.data);
    return this.data.resultado = parseInt(this.data.ml) / parseInt(this.data.horas) / parseInt(this.data.constante);
  }

  mostrarFormula() {
    let list = "<p>Microgotero = 1</p><p>Normogotero = 3</p><p>Macrogotero = 4</p>"

    let alert = this.alertCtrl.create({
      title: 'Formula',
      subTitle: 'ml / horas / [constante]',
      message: list,
      buttons: ['Back']
    });
    alert.present()
  }

  borrarResultado() {
    return this.data.ml = '', this.data.horas = '', this.data.constante = '', this.data.resultado = 0;
  }

}
