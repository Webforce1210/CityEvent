import { Injectable } from '@angular/core';
import { ListContact } from './models/Contact.model';
let myData=require("../assets/contact.json");

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  Contacts:ListContact[]=myData.ListContact;

  getContactByid(id:string){

    for(let contact of this.Contacts){
      if(id === contact.id ){
        console.log(contact)

      }
    }
  }
}
