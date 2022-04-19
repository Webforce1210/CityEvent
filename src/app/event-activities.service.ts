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
        res.forEach(item => {
          const event = new EventActivity();
          event.id = item.id;
          event.title = item.title;
          event.budget = item.budget;
          event.adresse = item.adresse;
          event.activity = item.type_activite;
          event.description = item.description;
          event.date_debut = item.date_debut;
          events.push(event);
        })
        return res;
      }
    );

    return events;

  }

  getEventById(id: string): EventActivity {
    const event = new EventActivity();

    const req = this.http.get(`${this.baseUrl}/event/${id}`);
    req.subscribe(
      (res: any) => {
        event.id = res.id;
        event.title = res.title;
        event.budget = res.budget;
        event.adresse = res.adresse;
        event.activity = res.type_activite;
        event.description = res.description;
        event.date_debut = res.date_debut;
        event.userEvents = res.userEvents;
        event.messageActivites = res.messageActivites;
        return res;
      },
      (err) => {
        throw new Error('Event not found: ' + err);
      }
    );

    return event;
  }

  getLastEvents() {
    const events: EventActivity[] = [];
    const req = this.http.get(`${this.baseUrl}/event/last`);
    req.subscribe(
      (res: any) => {
        res.forEach(item => {
          const event = new EventActivity();
          event.id = item.id;
          event.title = item.title;
          event.budget = item.budget;
          event.adresse = item.adresse;
          event.activity = item.type_activite;
          event.description = item.description;
          event.date_debut = item.date_debut;
          events.push(event);
        })
        return res;
      }
    );

    return events;
  }
}
