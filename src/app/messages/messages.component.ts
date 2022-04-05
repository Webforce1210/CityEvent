import { Component, OnInit } from '@angular/core';
import { UserActivity } from '../models/UserActivity.model';
import { UserActivitiesService } from '../user-activities.service';
import { Message } from '../models/Message.model';
import { FormControl} from '@angular/forms';
import { Discussion } from '../models/Discussion.model';
import { ListContact } from '../models/Contact.model';
import { Router } from '@angular/router';




@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})

export class MessagesComponent implements OnInit {

contentValue = new FormControl("");

  constructor(public router: Router,private storage:UserActivitiesService) { }

  User:UserActivity[]=[];
  Message:Message[]=[];
  Reponse:Message[]=[];
  Discussion:Discussion[]=[];
  LastMessage: string = "";
  Contacts:ListContact[]=[];


  ngOnInit(): void {
    this.storage.lastMessages();
    this.LastMessage=this.storage.lastMessage
    console.log(this.storage.AllMessage)
  }

Contact:boolean=false;
list:boolean=!this.Contact;

MessView(){
  this.Contact=!this.Contact
  this.list=!this.list
};

newMess(){
  this.storage.create(this.contentValue.value);
}
redirect(){
  this.router.navigate(['contact/01'])
}
}

