import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import arr from '../../app/Awe' ;

import{ AboutPage} from '../../pages/about/about';
import {LabsPage} from '../../pages/labs/labs';
import {StartUpPage} from '../../pages/start-up/start-up';
import {ProgrammesPage} from '../../pages/programmes/programmes';


/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {

 // secondarr = arr ;

 name =arr[0].name ;
 surname=arr[0].surname;

  slideData = [ "<img src='../../assets/imgs/photo-1517694712202-14dd9538aa97.jpg' />"]



  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondPage');
  }

  aboutUs(){
    this.navCtrl.push(AboutPage);
  }

  programmes(){
    this.navCtrl.push(ProgrammesPage);
  }

  startUp(){
    this.navCtrl.push(StartUpPage);
  }


  lab(){
    this.navCtrl.push(LabsPage);
  }
}
