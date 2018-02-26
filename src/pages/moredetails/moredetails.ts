import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-moredetails',
  templateUrl: 'moredetails.html'
})

export class MoreDetailsPage {

  constructor(public navCtrl: NavController, public http: Http) {

  }
}