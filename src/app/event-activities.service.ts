import { Injectable } from '@angular/core';
import { EventActivity } from './Models/EventActivity.model';
let myData = require("../assets/data.json");

@Injectable({
  providedIn: 'root'
})
export class EventActivitiesService {

  constructor() { }
  lastEvents: EventActivity[]=myData.lastActivities;
}
