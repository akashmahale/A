import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { EventsPage } from '../events/events';
import { NewEventPage } from '../newevent/newevent';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  colorData: any = [];
  classes = { 'calTop1': false, 'calTop2': false, 'calTop3': true };
  constructor(public navCtrl: NavController, public http: Http) {
    this.getColor();
  }
  viewEventsPage() {
    this.navCtrl.push(EventsPage);
  }
  viewNewEventPage() {
    this.navCtrl.push(NewEventPage);
  }
  viewDetailsPage() {
    this.navCtrl.push(DetailsPage);
  }
  getColor() {
    this.http.get('https://api.myjson.com/bins/fg4l5')    //  https://api.myjson.com/bins/136kp1
      .map((data) => data.json())
      .subscribe((data) => {
        this.colorData = data;
      });
  }
  // months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  // dates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  // days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

}
