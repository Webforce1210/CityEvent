import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EventActivity } from './models/EventActivity.model';

let myData = require("../assets/data.json");

@Injectable({
  providedIn: 'root'
})
export class EventActivitiesService {

  baseUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  lastEvents: EventActivity[] = myData.lastActivities;

  getEvents(lieu: string, categorie: string) {
    const data = { adresse: lieu, hobbies: categorie };

    const events: EventActivity[] = [];
    const req = this.http.post(`${this.baseUrl}/event/filter`, data);
    req.subscribe(
      (res: any) => {
        console.log(res);
        res.forEach(item => {
          const event = new EventActivity();
          event.id = item.id;
          event.title = item.title;
          event.budget = item.budget;
          event.adresse = item.adresse;
          event.activity = item.type_activite;
          event.description = item.description;
          events.push(event);
        })
        return res;
      }
    );

    return events;

  }

  getEventById(id: string): EventActivity {
    const data = this.lastEvents.find(event => event.id === id);
    if (data === undefined) {
      throw new Error('Event not found');
    } else {
      const event = new EventActivity(data.id, data.title);
      event.adresse = data.adresse;
      event.description = data.description;
      event.date = data.date;
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
