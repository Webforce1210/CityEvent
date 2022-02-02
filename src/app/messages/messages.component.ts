import { Component, OnInit } from '@angular/core';
import { UserActivity } from '../Models/UserActivity.model';
import { UserActivitiesService } from '../user-activities.service';
import { Message } from '../Models/Message.model';
import { FormControl} from '@angular/forms';
import { Discussion } from '../Models/Discussion.model';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})

export class MessagesComponent implements OnInit {

contentValue = new FormControl("");

  constructor(private storage:UserActivitiesService) { }

  User:UserActivity[]=[];
  Message:Message[]=[];
  Reponse:Message[]=[];
  Discussion:Discussion[]=[];
  LastMessage: string = "";


  ngOnInit(): void {
    this.storage.lastMessages();
    this.LastMessage=this.storage.lastMessage
    console.log(this.storage.AllMessage)
  }
group:boolean=false;
list:boolean=!this.group;

grouped(){
  this.group=!this.group
  this.list=!this.list
};

newMess(){
  this.storage.create(this.contentValue.value);
}
}
