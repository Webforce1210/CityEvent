import { Component, OnInit } from '@angular/core';
import { Message } from '../Models/Message.model';
import { Discussion } from '../Models/Discussion.model';
import {Router, ActivatedRoute} from '@angular/router';
import { UserActivitiesService } from '../user-activities.service';
import { FormControl} from '@angular/forms';

@Component({
  selector: 'app-message-groupe',
  templateUrl: './message-groupe.component.html',
  styleUrls: ['./message-groupe.component.css']
})
export class MessageGroupeComponent implements OnInit {

  User:[]=[];
  Message:Message[]=[];
  Reponse:Message[]=[];
  Discussion:Discussion[]=[];
  contentValue = new FormControl("");
  

  constructor(private route :ActivatedRoute,private storage:UserActivitiesService) { }

  ngOnInit(): void {
    this.storage.create("fzfz");
    this.storage.getUser("007");
    this.storage.getMessagesofUser("001");
    // this.storage.getMessage();
    this.storage.TriMess();
  }
  NewMess(){
    this.storage.create(this.contentValue.value);
  }
}

