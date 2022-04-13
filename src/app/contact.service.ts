import { Injectable } from '@angular/core';
import { Contact } from './models/Contact.model';
import { User } from './models/User.model';
import { UserService } from './user.service';
let myData = require("../assets/contact.json");

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  Contacts:Contact[]=myData.listcontact;

  constructor(private userService: UserService) {}

  addContactbyid(id:string){
let listContact:User[]=[]
    this.Contacts.forEach(element => {
      if(element.propid===id){
        element.idcontacts.forEach(e=> {
          listContact.push(this.userService.findUserById(e))
        });
      }
    });return listContact
  }
}
