import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-eventdetails',
  templateUrl: 'eventdetails.html'
})

export class EventDetailsPage {
  colorData: any = [];
  constructor(public navCtrl: NavController, public http: Http) {

  }
}