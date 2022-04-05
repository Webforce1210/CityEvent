import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { ListContact } from '../models/Contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private storage:ContactService) { }
  userId!:string;
  Contacts:ListContact[]=[];

  ngOnInit(): void {
    this.storage.getContactByid(this.userId);
    
  }

  GetContact(){



  }

}
