import { Injectable } from '@angular/core';
import { User } from './models/User.model';
let myData = require ("../assets/data.json");

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  users:User[];

  constructor() { 
    this.users = myData.usersList;
  }

  findUserById(id:number): User {
    const user = this.users.find(user => user.id === id);
    if(user === undefined) {
      throw new Error('User not found');
    } else {
      return new User(user.id, user.pseudo, user.events, user.avatar);
    }
  }

  findEventParticipants(eventId:number):User[] {
    const users:User[] = [];

    this.users.forEach(user => {
      const events = user.events;
      if(events.length > 0 ) {
        const item = events.find(event => parseInt(event.id) === eventId);
        if(item !== undefined) {
          users.push(new User(user.id, user.pseudo, [item], user.avatar));
        }
      }
    });
    return users;
  }
}
