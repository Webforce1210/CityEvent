import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../models/User.model';
let uniqid = require('uniqid');

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {
  selectedRegion: string[] = [];
  selectedHobbies: string[] = [];
  userHobbies: string[] = [];
  userRegions: string[] = [];
  isRegistered: boolean = false;

  nameValue = new FormControl("");
  emailValue = new FormControl("");
  passwordValue = new FormControl("");
  hobbiesValue = new FormControl("");
  regionValue = new FormControl("");

  error: boolean = false;
  messages = {
    login: "Le mot de passe ou l'email est faux",
    register: "Le formulaire est mal rempli"
  };

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let mode = this.route.snapshot.params['mode'];
    if (mode === 'register') {
      this.isRegistered = true;
    }
  }

  login() {
    let user = this.userService.findUserForLogin(this.emailValue.value, this.passwordValue.value);

    if (user) {
      this.error = false;
      this.router.navigate(["/profil/", user.id]);
    } else {
      this.error = true;
    }
  }

  selectChangeHandler(event: any) {
    this.selectedRegion = event.target.value;
    this.selectedHobbies = event.target.value;
  }

  register(user: User) {
    let userId = uniqid();

    const newUser = new User(userId, this.nameValue.value, [], "");
    newUser.email = this.emailValue.value;
    newUser.password = this.passwordValue.value;
    newUser.hobbies = this.selectedHobbies;
    newUser.regions = this.selectedRegion;
    this.userService.appendUser(user);
    this.router.navigate(["/profil/", user.id]);
  }

}
