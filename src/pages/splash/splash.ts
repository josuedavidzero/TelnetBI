import { Component } from '@angular/core';
import {IonicPage, ViewController} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import {TelnetService} from "../../app/modules/TelnetService";

/**
 * Generated class for the SplashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {

  constructor(public viewCtrl: ViewController, public splashScreen: SplashScreen, private service:TelnetService) {
  }

  ionViewDidEnter() {
    //console.log('ionViewDidLoad SplashPage');
    this.splashScreen.hide();
    setTimeout(() => {
      this.viewCtrl.dismiss();
      this.service.conectaServicio();
    }, 4000);
  }

}
