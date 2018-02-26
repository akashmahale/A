import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EventsPage } from '../pages/events/events';
import { NewEventPage } from '../pages/newevent/newevent';
import { DetailsPage } from '../pages/details/details';
import { EventDetailsPage } from '../pages/eventdetails/eventdetails';
import { OrderDetailsPage } from '../pages/orderdetails/orderdetails';
import { MoreDetailsPage } from '../pages/moredetails/moredetails';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EventsPage,
    NewEventPage,
    DetailsPage,
    EventDetailsPage,
    OrderDetailsPage,
    MoreDetailsPage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EventsPage,
    NewEventPage,
    DetailsPage,
    EventDetailsPage,
    OrderDetailsPage,
    MoreDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpModule,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
