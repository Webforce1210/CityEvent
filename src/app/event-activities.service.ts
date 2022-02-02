import { Injectable } from '@angular/core';
import { CreditCardInfo } from './models/CreditCardInfo.model';
import { EventActivity } from './models/EventActivity.model';
import { User } from './models/User.model';
let myData = require ("../assets/data.json");

@Injectable({
  providedIn: 'root'
})
export class EventActivitiesService {

  constructor() { }

  lastEvents: EventActivity[] = myData.lastActivities;
  userEvents: EventActivity[] = [];
  userCreditCardInfos: CreditCardInfo[] = [];

  getEventById(id:number):EventActivity {
    const data = this.lastEvents.find(event => parseInt(event.id) === id);
    if(data === undefined) {
        throw new Error('Event not found');
    } else {
        const event = new EventActivity(data.id, data.title);
        event.adresse = data.adresse;
        event.description = data.description;
        return event;
    }
  }

  getEventsById(eventsId:number[]):EventActivity[] {
      const events:EventActivity[] = [];
      this.lastEvents.forEach(element => {
      const id = parseInt(element.id);
      if(eventsId.find(item => item === id)) {
        const eventUser = new EventActivity(element.id, element.title);
        eventUser.adresse = element.adresse;
        events.push(eventUser);
      }
    });
    return events;
  }

  getUserById(id: string){
    let utilisateur : User = new User(id);
    for(let user of myData.User){
      if( user.id === id){
        utilisateur.cardInfos = user.cardInfos;
        utilisateur.cover = user.cover;
        utilisateur.events = user.events;
        utilisateur.hobbies = user.hobbies;
        utilisateur.region = user.region;
        utilisateur.stars = user.stars;
        break; 
      }
  
    }
    return utilisateur;
  }

  getUserEvents(userId : string){
    let user = this.getUserById(userId);
    if (!user.events) {
      this.userEvents = [];
    }else {
      for( let event of user.events){
        this.userEvents.push(event);
      }
    }
  
    return this.userEvents;
  }

  getUserCardInfos(userId : string){
    let user = this.getUserById(userId);
    if (!user.cardInfos) {
      this.userCreditCardInfos = [];
    }else {
      for( let card of user.cardInfos){
        this.userCreditCardInfos.push(card);
      }
    }
  
    return this.userCreditCardInfos;
  }
}
