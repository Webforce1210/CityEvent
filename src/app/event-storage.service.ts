import { Injectable } from '@angular/core';

import { EventActivity } from './models/EventActivity.model';
let uniqid = require('uniqid'); 

@Injectable({
  providedIn: 'root'
})
export class EventStorageService {


  events : EventActivity []  = [];

  constructor() { }


 
  create(event: EventActivity) {

    this.events.push(event);
    console.log(this.events)
  
    }
   

}

