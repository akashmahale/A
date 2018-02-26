import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-newevent',
  templateUrl: 'newevent.html'
})

export class NewEventPage {
  colorData: any = [];
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