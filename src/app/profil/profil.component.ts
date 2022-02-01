import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventActivitiesService } from '../event-activities.service';
import { EventActivity } from '../models/EventActivity.model';
import { User } from '../models/User.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  
  userId!:number;
  user!:User;
  events:EventActivity[] = [];

  constructor(
    private userService:UserService,
    private route:ActivatedRoute,
    private router:Router,
    private eventService:EventActivitiesService
  ) { }

  ngOnInit(): void {
    try {
      this.userId = parseInt(this.route.snapshot.params['userid']);
      this.user = this.userService.findUserById(this.userId);
      const eventIds:number[] = [];
      this.user.events.forEach(event => {
        eventIds.push(parseInt(event.id));
      });
      this.events = this.eventService.getEventsById(eventIds);
    } catch (error) {
      this.router.navigateByUrl('/login');
    }
  }

}
