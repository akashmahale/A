import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-orderdetails',
  templateUrl: 'orderdetails.html'
})

export class OrderDetailsPage {
  colorData: any = [];
  constructor(public navCtrl: NavController, public http: Http) {

  }
}