import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/User.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EventActivity } from '../models/EventActivity.model';
import { EventActivitiesService } from '../event-activities.service';

@Component({
  selector: 'app-fil-dactu',
  templateUrl: './fil-dactu.component.html',
  styleUrls: ['./fil-dactu.component.css']
})
export class FilDactuComponent implements OnInit {

  user!: User;
  pastActivities: EventActivity[] = [];
  futurActivities: EventActivity[] = [];
  allEvents: EventActivity[] = [];

  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private EventServices: EventActivitiesService
    ) { }

  ngOnInit(): void {
    this.checkSession();

    this.allEvents = this.EventServices.lastEvents;

  }

  private checkSession(): void {
    try {
      const id: string = this.route.snapshot.params['userid'];
      this.user = this.userService.findUserById(id);
    } catch (error) {
      this.router.navigateByUrl('/login');
    }
  }

  public compteview() {
    this.compteview=this.compteview;
  }
}