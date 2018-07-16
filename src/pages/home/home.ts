import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import arr from '../../app/Array/' ;
import arr from '../../app/Awe' ;
import {SecondPage} from '../../pages/second/second' ;

import{ AboutPage} from '../../pages/about/about';
import {LabsPage} from '../../pages/labs/labs';
import {StartUpPage} from '../../pages/start-up/start-up';
import {ProgrammesPage} from '../../pages/programmes/programmes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  name;
  surname;

  constructor(public navCtrl: NavController) {

  }


  Submit(){

    

    let obj = new Login (this.name , this.surname);
    arr.push(obj);
    console.log(arr);
    this.navCtrl.push(SecondPage);

  }

}


export class Login {

  name;
  surname;
  constructor(name ,surname){
    this.name=name;
    this.surname=surname;
  }
}







