import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { EventDetailsPage } from '../eventdetails/eventdetails';
import { OrderDetailsPage } from '../orderdetails/orderdetails';
import { MoreDetailsPage } from '../moredetails/moredetails';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'

})
export class DetailsPage {
  colorData: any = [];
  tab1Root = EventDetailsPage;
  tab2Root = OrderDetailsPage;
  tab3Root = MoreDetailsPage;
  constructor(public navCtrl: NavController, public http: Http) {
    this.getColor();
  }
  
  getColor() {
    this.http.get('https://api.myjson.com/bins/fg4l5/')
      .map((data) => data.json())
      .subscribe((data) => {
        this.colorData = data;
      });

  }
}