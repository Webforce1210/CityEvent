import { Injectable } from '@angular/core';
import { User } from './models/User.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
let myData = require("../assets/data.json");

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://127.0.0.1:8000';

  users!: User[];

  constructor(private http: HttpClient) {
    this.users = myData.usersList;
    this.request();
  }

  async request(url = `${this.baseUrl}/user`) {
    const req = this.http.get<User[]>(url);
    await req.subscribe(
      (res: any) => {
        return res;
      }
    );
  }

  findUserById(id: string | number | null) { // | null
    const req = this.http.get<User>(`${this.baseUrl}/user/${id}`);
    const user = new User("0", "Pseudo", [], "wallpaper.jpg");
    user.cover = "wallpaper.jpg";
    req.subscribe(
      (res: any) => {
        user.pseudo = res.pseudo;
        user.name = res.name;
        user.email = res.email;
        user.id = res.id;
        user.events = res.userEvents;
        user.hobbies = res.hobbies;
        if (res.cover) {
          user.cover = res.cover;
        }
        user.avatar = res.avatar;
        user.region = res.region;
        user.stars = [];
        for (let i = 0; i < res.stars; i++) {
          user.stars[i] = 1;

        }

        return res;
      }
    );
    return user;
  }

  findUserForLogin(email: string, password: string) {
    const data = {
      email: email,
      password: password
    };
    const user = new User("1", "Pseudo", [], "wallpaper.jpg");

    const req = this.http.post(`${this.baseUrl}/login`, data);


    user.cover = "wallpaper.jpg";
    req.subscribe(
      (res: any) => {
        user.pseudo = res.pseudo;
        user.name = res.name;
        user.email = res.email;
        user.id = res.id;
        user.events = res.userEvents;
        user.hobbies = res.hobbies;
        if (res.cover) {
          user.cover = res.cover;
        }
        user.avatar = res.avatar;
        user.region = res.region;
        user.stars = [];
        for (let i = 0; i < res.stars; i++) {
          user.stars[i] = 1;
        }

        return res;
      }
    );

    return user;
  }

  appendUser(user: User) {
    const response = {
      userId: 0,
      status: '',
      message: ''
    };

    const data = {
      pseudo: user.pseudo,
      email: user.email,
      password: user.password,
      region: user.region,
      hobbies: user.hobbies
    }
    const req = this.http.post(`${this.baseUrl}/register`, data);
    req.subscribe(
      (res: any) => {
        response.status = res.status;
        if (res.status === 'success') {
          response.userId = res.userId;
        } else {
          response.message = res.message;
        }
        return res;
      }
    );

    return response;
  }

  findHobbies() {
    return myData.hobbies;
  }

  findRegions() {
    return myData.regions;
  }

  //import Flo
  initialized: boolean = false;
  init() {
    if (this.initialized) {
      return;
    }
    // console.log(myData.usersList);

    // for (const user of myData.usersList) {
    //   this.users.push(new User( user.pseudo, user.region, user.avatar, user.cover, user.hobbies))
    //   //user.id,
    // }
    this.initialized = true;
  };

  update(user: User | null) {

    for (let i = 0; i < this.users.length; i++) {
      if (user && user.id === this.users[i].id) {
        this.users[i].pseudo = user.pseudo;
        this.users[i].region = user.region;
      }
    }

  }




}
