import { Component, OnInit } from '@angular/core';
import { UserActivitiesService } from '../user-activities.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})

export class MessagesComponent implements OnInit {

  constructor(public router: Router,private storage:UserActivitiesService) { }
  userId!:string;
  ngOnInit(): void {
  }
}

