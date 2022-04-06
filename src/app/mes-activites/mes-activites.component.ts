import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/User.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-mes-activites',
  templateUrl: './mes-activites.component.html',
  styleUrls: ['./mes-activites.component.css']
})
export class MesActivitesComponent implements OnInit {
  user!: User;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.checkSession();
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
