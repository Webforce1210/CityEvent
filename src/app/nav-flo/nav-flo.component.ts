import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/User.model';
import { ActivatedRoute, Router, RouterEvent,Event } from '@angular/router';
import { EventActivity } from '../models/EventActivity.model';
import { EventActivitiesService } from '../event-activities.service';
import { CompteComponent } from '../compte/compte.component';



@Component({
  selector: 'app-nav-flo',
  templateUrl: './nav-flo.component.html',
  styleUrls: ['./nav-flo.component.css']
})
export class NavFloComponent implements OnInit {
  
  user!: User;
  pastActivities: EventActivity[] = [];
  futurActivities: EventActivity[] = [];
  allEvents: EventActivity[] = [];

  isNotCompte:boolean=true;
  isCompte:boolean=true;

  constructor(private userService: UserService,
    private route: ActivatedRoute,
    public router: Router,
    private storage: UserService,
    private EventServices: EventActivitiesService) {
      router.events.subscribe((routerEvent: Event) => {
        this.checkRouterEvent(routerEvent);
      })
     }

     public checkRouterEvent(routerEvent: Event): void {
      if (routerEvent instanceof CompteComponent) {
        this.isCompte = true;
        this.isNotCompte=false;
      }
      // if (routerEvent instanceof NavigationEnd ||
      //     routerEvent instanceof NavigationCancel ||
      //     routerEvent instanceof NavigationError) {
      //   this.loading = false;
      // }
    }
  ngOnInit(): void {
    this.checkSession();

    this.allEvents = this.EventServices.lastEvents;
    this.route.paramMap.subscribe(param=>{
        this.user = this.storage.findUserById(param.get('userid')) as User;
  
      });
    }
  private checkSession(): void {
      try {
        const id: string = this.route.snapshot.params['userid'];
        this.user = this.userService.findUserById(id);
        console.log(this.user.id);
      } catch (error) {
        this.router.navigateByUrl('/login');
      }
    }

    public switchnav(){
      this.isNotCompte= !this.isNotCompte;
      this.isCompte= !this.isCompte;
    }
}