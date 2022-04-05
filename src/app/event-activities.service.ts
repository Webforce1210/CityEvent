import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { EventActivity } from './models/EventActivity.model';
let myData = require("../assets/data.json");
=======
import { EventActivity } from './models/EventActivity.model';
let myData = require ("../assets/data.json");
>>>>>>> edfb4336ddad4206d3a4af757eaf8703780f081c

@Injectable({
  providedIn: 'root'
})
export class EventActivitiesService {

  constructor() { }
<<<<<<< HEAD
  lastEvents: EventActivity[]=myData.lastActivities;
=======

  lastEvents: EventActivity[] = myData.lastActivities;
>>>>>>> edfb4336ddad4206d3a4af757eaf8703780f081c
}
