import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventActivitiesService } from '../event-activities.service';
import { EventActivity } from '../models/EventActivity.model';
import { User } from '../models/User.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-info-event',
  templateUrl: './info-event.component.html',
  styleUrls: ['./info-event.component.css']
})
export class InfoEventComponent implements OnInit {
  
  userId!:string;
  event!:EventActivity;
  notFound:boolean = false;
  participants:User[] = [];
  
  constructor(
    private eventService:EventActivitiesService, 
    private userService:UserService, 
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.checkSession();
    this.findEvent();
    if(!this.notFound) {
      this.participants = this.userService.findEventParticipants(this.event.id);
    }
  }

  private findEvent(): void {
    try {
      this.event = this.eventService.getEventById(this.getRouterParam('eventid'));
    } catch (error) {
      this.notFound = true;
    }
  }

  private checkSession(): void {
    try {
      const id:string = this.getRouterParam('userid');
      this.userId = this.userService.findUserById(id).id;
    } catch (error) {
      this.router.navigateByUrl('/login');
    }
  }

  private getRouterParam(param:string):string {
    return this.route.snapshot.params[param];
  }

}
