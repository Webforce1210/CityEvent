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

  userId!: string;
  user!: User;
  events: EventActivity[] = [];
  styles = { background: '#0d6efd' };

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private eventService: EventActivitiesService
  ) { }

  ngOnInit(): void {
    try {
      this.userId = this.route.snapshot.params['userid'];
      this.user = this.userService.findUserById(this.userId);
      if (this.user.cover !== null) {
        this.styles.background = `center / cover no-repeat url(/assets/avatars/${this.user.cover})`;
      }
      const eventIds: string[] = [];
      this.user.events.forEach(event => {
        eventIds.push(event.id);
      });
      this.events = this.eventService.getEventsById(eventIds);
    } catch (error) {
      this.router.navigateByUrl('/login');
    }
  }

}
