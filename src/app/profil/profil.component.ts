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
  events: any[] = [];

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    try {
      this.userId = this.route.snapshot.params['userid'];
      this.user = this.userService.findUserById(this.userId);
      this.events = this.user.events;
    } catch (error) {
      this.router.navigateByUrl('/login');
    }
  }

}
