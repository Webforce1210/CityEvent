import { Injectable } from '@angular/core';
import { EventActivity } from './models/EventActivity.model';
let myData = require("../assets/data.json");

@Injectable({
  providedIn: 'root'
})
export class EventActivitiesService {

  constructor() { }

  lastEvents: EventActivity[] = myData.lastActivities;

  getEventById(id: string): EventActivity {
    const data = this.lastEvents.find(event => event.id === id);
    if (data === undefined) {
      throw new Error('Event not found');
    } else {
      const event = new EventActivity(data.id, data.title);
      event.adresse = data.adresse;
      event.description = data.description;
      return event;
    }
  }

  getEventsById(eventsId: any[]): EventActivity[] {
    const events: EventActivity[] = [];
    this.lastEvents.forEach(element => {
      const id = parseInt(element.id);
      if (eventsId.find(item => item === id)) {
        const eventUser = new EventActivity(element.id, element.title);
        eventUser.adresse = element.adresse;
        events.push(eventUser);
      }
    });
    return events;
  }
}