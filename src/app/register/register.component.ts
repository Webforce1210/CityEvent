import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from '../models/User.model';
import { UserService } from '../user.service';
let uniqid = require('uniqid');
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  selectedRegion: string = "";
  selectedHobbies: string[] = [];
  hobbies: string[] = [];
  regions: string = "[]";
  error: boolean = false;
  secondStep: boolean = false;

  nameValue = new FormControl("", [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(180)
  ]);
  emailValue = new FormControl("", [
    Validators.required,
    Validators.email
  ]);
  passwordValue = new FormControl("", [
    Validators.required,
    Validators.minLength(7),
    Validators.maxLength(255)
  ]);
  confirmValue = new FormControl("");

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.regions = this.userService.findRegions();
    this.hobbies = this.userService.findHobbies();
    this.toggle('.second-step', 'none');
  }

  selectChangeHandler(event: any) {
    if (event.target.id === "hobbies") {
      this.selectedHobbies = [];
      for (const option of event.target.options) {
        if (option.selected) {
          this.selectedHobbies.push(option.value);
        }
      }
    } else {
      this.selectedRegion = event.target.value;
    }
  }

  validateFirstStep(event: Event) {
    this.validateName();
    this.validateEmail();
    this.validatePassword();
    this.validateConfirm();

    if (!this.error && this.isValid()) {
      this.changeStep(event);
      this.toggle('#alert', 'none');
    } else {
      this.toggle('#alert', 'block');
    }
  }

  changeStep(event: Event) {
    event.preventDefault();
    this.secondStep = !this.secondStep;
    if (this.secondStep) {
      this.toggle('.first-step', 'none');
      this.toggle('.second-step', 'block');
    } else {
      this.toggle('.first-step', 'block');
      this.toggle('.second-step', 'none');
    }
  }

  register() {
    if (!this.error) {
      const newUser = new User(uniqid(), this.nameValue.value, [], null);
      newUser.email = this.emailValue.value;
      newUser.password = this.passwordValue.value;
      newUser.hobbies = this.selectedHobbies;
      newUser.region = this.selectedRegion;
      newUser.cover = null;
      const response = this.userService.appendUser(newUser);
      this.toggle('#alert', 'none');
      this.router.navigate(["/login"]);
    } else {
      this.toggle('#alert', 'block');
    }
  }

  isValid() {
    return !this.nameValue.invalid &&
      !this.emailValue.invalid &&
      !this.passwordValue.invalid &&
      this.passwordValue.value === this.confirmValue.value;
  }

  validateName() {
    if (this.nameValue.invalid) {
      this.toggle("#name-feedback", 'block');
    } else {
      this.toggle("#name-feedback", 'none');
    }
  }

  validateEmail() {
    if (this.emailValue.invalid) {
      this.toggle("#email-feedback", 'block');
    } else {
      this.toggle("#email-feedback", 'none');
    }
  }

  validatePassword() {
    if (this.passwordValue.invalid) {
      this.toggle("#password-feedback", 'block');
    } else {
      this.toggle("#password-feedback", 'none');
    }
  }

  validateConfirm() {
    if (this.passwordValue.value !== this.confirmValue.value) {
      this.toggle("#confirm-feedback", 'block');
    } else {
      this.toggle("#confirm-feedback", 'none');
    }
  }

  private toggle(target: string, display: 'none' | 'block') {
    const nodeList = document.querySelectorAll(target);
    nodeList.forEach(element => {
      if (element instanceof HTMLElement) {
        element.style.display = display;
      }
    });
  }
}
