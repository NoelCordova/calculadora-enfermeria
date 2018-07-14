import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { PerdidasInsensiblesPage } from '../pages/perdidas-insensibles/perdidas-insensibles';
import { GananciasEndogenasPage } from '../pages/ganancias-endogenas/ganancias-endogenas';
import { UresisHorariaPage } from '../pages/uresis-horaria/uresis-horaria'
import { ConteoGotasPage } from '../pages/conteo-gotas/conteo-gotas';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  options: Array<{title: string, component: any, icon: string}>;
  sections: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.options = [
      { title: 'Home', component: HomePage, icon: 'md-home' },
    ];

    this.sections = [
      { title: 'Perdidas', component: PerdidasInsensiblesPage, icon: 'md-trending-down' },
      { title: 'Ganancias', component: GananciasEndogenasPage, icon: 'md-trending-up' },
      { title: 'Uresis', component: UresisHorariaPage, icon: 'md-flask' },
      { title: 'Conteo', component: ConteoGotasPage, icon: 'md-water' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
