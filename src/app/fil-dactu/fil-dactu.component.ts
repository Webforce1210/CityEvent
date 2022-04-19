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
  allEvents: EventActivity[] = [];
  selectedLieu: string | null = null;
  selectedHobbies: string | null = null;

  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private EventServices: EventActivitiesService
  ) { }

  ngOnInit(): void {
    this.checkSession();
    this.allEvents = this.EventServices.getEvents('adresse', 'sport');
  }

  selectChangeHandler(event: any) {
    if (event.target.id === "lieux") {
      this.selectedLieu = event.target.value;
    } else {
      this.selectedHobbies = event.target.value;
    }

    let adresse = 'adresse';
    if (this.selectedLieu !== null) {
      adresse = this.selectedLieu;
    }

    let hobbies = 'sport';
    if (this.selectedHobbies !== null) {
      hobbies = this.selectedHobbies;
    }

    this.allEvents = this.EventServices.getEvents(adresse, hobbies);
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