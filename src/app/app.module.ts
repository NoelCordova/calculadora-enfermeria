import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PerdidasInsensiblesPage } from '../pages/perdidas-insensibles/perdidas-insensibles';
import { GananciasEndogenasPage } from '../pages/ganancias-endogenas/ganancias-endogenas';
import { UresisHorariaPage } from '../pages/uresis-horaria/uresis-horaria'
import { ConteoGotasPage } from '../pages/conteo-gotas/conteo-gotas';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PerdidasInsensiblesPage,
    GananciasEndogenasPage,
    UresisHorariaPage,
    ConteoGotasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PerdidasInsensiblesPage,
    GananciasEndogenasPage,
    UresisHorariaPage,
    ConteoGotasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
