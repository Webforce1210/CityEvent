import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventActivity } from '../models/EventActivity.model';
import { User } from '../models/User.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-mes-activites',
  templateUrl: './mes-activites.component.html',
  styleUrls: ['./mes-activites.component.css']
})
export class MesActivitesComponent implements OnInit {
  user!: User;
  pastActivities: number = 0;
  futurActivities: number = 0;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.checkSession();
  }

  isPastActivity(event) {
    const date = new Date(event.event.date_debut.date);
    const now = new Date();

    let status = date < now;

    if (status) {
      this.pastActivities++;
    } else {
      this.futurActivities++;
    }

    return status;
  }

  changeStatus(event: any, eventId: string) {
    event.preventDefault();
    this.user.events.forEach(activity => {
      if (activity.event.id === parseInt(eventId)) {
        activity.active = !activity.active;
      }
    });
  }

  private checkSession(): void {
    try {
      const id: string = this.route.snapshot.params['userid'];
      this.user = this.userService.findUserById(id);
    } catch (error) {
      this.router.navigateByUrl('/login');
    }
  }
}
