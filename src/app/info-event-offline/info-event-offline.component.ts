import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventActivitiesService } from '../event-activities.service';
import { EventActivity } from '../models/EventActivity.model';

@Component({
  selector: 'app-info-event-offline',
  templateUrl: './info-event-offline.component.html',
  styleUrls: ['./info-event-offline.component.css']
})
export class InfoEventOfflineComponent implements OnInit {

  userId!: string;
  event!: EventActivity;
  notFound: boolean = false;
  error: boolean = false;

  constructor(
    private eventService: EventActivitiesService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.findEvent();
  }

  private findEvent(): void {
    try {
      this.event = this.eventService.getEventById(this.getRouterParam('eventid'));
    } catch (error) {
      this.notFound = true;
    }
  }
  
  private getRouterParam(param: string): string {
    return this.route.snapshot.params[param];
  }

}
