import { Component, OnInit } from '@angular/core';
import { EventActivitiesService } from '../event-activities.service';
import { EventActivity } from '../models/EventActivity.model';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {


  constructor(private EventServices: EventActivitiesService) { }

lastEvents: EventActivity[] = [];

  ngOnInit(): void {
    this.lastEvents = this.EventServices.lastEvents;


}


}