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

  // @Input() userId!: string;

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

    // this.user.events.forEach(event => {
    //   const date = new Date(event.date);
    //   const now = new Date();
    //   if (date < now) {
    //     this.pastActivities.push(event);
    //   } else {
    //     this.futurActivities.push(event);
    //   }
    // });
  }

  // changeStatus(event: any, eventId: string) {
  //   event.preventDefault();
  //   this.user.events.forEach(activity => {
  //     if (activity.id === eventId) {
  //       activity.active = !activity.active;
  //     }
  //   });
  // }

  private checkSession(): void {
    try {
      const id: string = this.route.snapshot.params['userid'];
      this.user = this.userService.findUserById(id);
    } catch (error) {
      this.router.navigateByUrl('/login');
    }
  }
}

// 
// lastEvents: EventActivity[] = [];

//   ngOnInit(): void {
//     this.lastEvents = this.EventServices.lastEvents;


// }


// }