import { Injectable } from '@angular/core';
import { User } from './models/User.model';
let myData = require("../assets/data.json");

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[];

  constructor() {
    this.users = myData.usersList;
  }

  findUserById(id: string| null): User{ // | null

    if( id === null){
      throw new Error("id is null");
    }
    const user = this.users.find(user => user.id === id);
    if (user === undefined) {
      throw new Error('User not found');
    } else {
      const entity = new User(user.id, user.pseudo, user.events, user.avatar);
      entity.hobbies = user.hobbies;
      entity.stars = user.stars;
      entity.cover = user.cover;
      entity.region = user.region;
      return entity;
    }
  }

  findEventParticipants(eventId: any): User[] {
    const users: User[] = [];



    this.users.forEach(user => {
      const events = user.events;
      if (events.length > 0) {
        const item = events.find(event => event.id === eventId);
        if (item !== undefined) {
          users.push(new User(user.id, user.pseudo,  [item], user.avatar));
        }
      }
    });
    return users;
  }

  findUserForLogin(email: string, password: string) {
    let user: User | null = null;

    for (let i = 0; i < this.users.length; i++) {
      if (email === this.users[i].email && password === this.users[i].password) {
        user = this.users[i];
        break;
      }
    }

    return user;
  }

  appendUser(user: User) {
    this.users.push(user);
  }

  findHobbies() {
    return myData.hobbies;
  }

  findRegions() {
    return myData.regions;
  }

  //import Flo
  initialized: boolean = false;
  init() {
    if(this.initialized) {
      return;
    } 
    // console.log(myData.usersList);
    
    // for (const user of myData.usersList) {
    //   this.users.push(new User( user.pseudo, user.region, user.avatar, user.cover, user.hobbies))
    //   //user.id,
    // }
    this.initialized = true;
    };

    update(user:User | null){

      for(let i=0;i<this.users.length;i++){
        if(user && user.id ===this.users[i].id ){
          this.users[i].pseudo = user.pseudo;
          this.users[i].region= user.region;
        }
      }
    
    }




}
