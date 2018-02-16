import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { ChartsModule } from 'ng2-charts';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SplashPage } from '../pages/splash/splash'
import {LoginPage} from "../pages/login/login";
import { HttpClientModule } from '@angular/common/http';
import {TelnetService} from "./modules/TelnetService";

@NgModule({
  declarations: [
    MyApp,
    HomePage
    ,SplashPage
    ,LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ChartsModule,
    HttpClientModule,
    TelnetService,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,SplashPage,LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
