import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EventStorageService } from '../event-storage.service';
import { EventActivity } from '../models/EventActivity.model';
let uniqid = require('uniqid'); 


@Component({
  selector: 'app-creation-event',
  templateUrl: './creation-event.component.html',
  styleUrls: ['./creation-event.component.css']
})
export class CreationEventComponent implements OnInit {

  eventNameValue = new FormControl("");
  selectTypeValue = new FormControl("");
  addressValue = new FormControl("");
  startDateValue = new FormControl("");
  endDateValue = new FormControl("");
  startTimeValue = new FormControl("");
  endTimeValue = new FormControl("");
  participantsValue = new FormControl("");
  priceValue = new FormControl("");
  descriptionValue = new FormControl("");

  screen1 = true;
  screen2 = false;

  ecran2() {
    this.screen1 = false;
    this.screen2 = true;
  }

  ecran1() {
    this.screen1 = true;
    this.screen2 = false;
  }



  constructor(private storage: EventStorageService) { }

  ngOnInit(): void {  
    
  }
  add() {
    let uid = uniqid();
    let newEvent = new EventActivity(uid);
    newEvent.adresse = this.addressValue.value;
    newEvent.budget = this.priceValue.value;
    newEvent.date1 = this.startTimeValue.value;
    newEvent.date2 = this.endDateValue.value;
    newEvent.time1 = this.startDateValue.value;
    newEvent.time2 = this.endTimeValue.value
    newEvent.description = this.descriptionValue.value;
    newEvent.title = this.eventNameValue.value;
    newEvent.type = this.selectTypeValue.value;
    newEvent.participants = this.participantsValue.value;

this.storage.create(newEvent);

  }
}
