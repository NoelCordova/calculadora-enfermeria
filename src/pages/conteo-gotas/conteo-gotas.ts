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
    resultado1: 0,
    resultado2: 0
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) { }

  ionViewDidLoad() { }

  resultado() {
    console.log("Entry data:", this.data);

    this.data.resultado1 = parseInt(this.data.ml) / parseInt(this.data.horas) / parseInt(this.data.constante);
    this.data.resultado2 = parseInt(this.data.ml) / parseInt(this.data.horas) / 60;

    return this.data.resultado1, this.data.resultado2;
  }

  mostrarFormula() {
    let subTitle = "<p>gts/min = ml / horas / [constante]</p><p>ml/min = ml / horas / 60</p>"
    let message = "<h6>[Constantes]</h6><p>Microgotero = 1</p><p>Normogotero = 3</p><p>Macrogotero = 4</p>"

    let alert = this.alertCtrl.create({
      title: 'Fórmula',
      subTitle,
      message,
      buttons: ['Back']
    });
    alert.present()
  }

  borrarResultado() {
    this.data = {
      ml: '',
      horas: '',
      constante: '',
      resultado1: 0,
      resultado2: 0
    }

    return this.data;
  }

}
