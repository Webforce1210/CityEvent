import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {

  emailValue = new FormControl("");
  passwordValue = new FormControl("");

  error: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
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

}
