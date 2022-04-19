import { Component, OnInit } from '@angular/core';
import { EventActivitiesService } from '../event-activities.service';
import { MessageService } from '../message.service';
import { EventActivity } from '../models/EventActivity.model';
import { Message } from '../models/Message.model';
import { User } from '../models/User.model';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
let uniqid = require('uniqid');

@Component({
  selector: 'app-info-event',
  templateUrl: './info-event.component.html',
  styleUrls: ['./info-event.component.css']
})
export class InfoEventComponent implements OnInit {

  userId!: number;
  event!: EventActivity;
  notFound: boolean = false;
  messages: Message[] = [];
  newMessageValue = new FormControl("");
  error: boolean = false;

  constructor(
    private eventService: EventActivitiesService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.checkSession();
    this.findEvent();
  }

  appendMessage() {
    if (this.newMessageValue.value.length < 3) {
      this.error = true;
    } else {
      this.error = false;
      const message = new Message(
        uniqid(),
        this.userId,
        this.newMessageValue.value,
        this.event.id,
        new Date().toString()
      );
      this.messageService.addMessage(message);
      this.messages.push(message);
      this.newMessageValue = new FormControl("");
    }
  }

  private findEvent(): void {
    try {
      this.event = this.eventService.getEventById(this.getRouterParam('eventid'));
      this.event.messageActivites.forEach(item => {
        const message = new Message(item.id, item.user.id, item.message, this.event.id, item.date.date);
        this.messages.push(message);
      });
    } catch (error) {
      this.notFound = true;
    }
  }

  private checkSession(): void {
    try {
      const id: string = this.getRouterParam('userid');
      this.userId = parseInt(this.userService.findUserById(id).id);
    } catch (error) {
      this.router.navigateByUrl('/login');
    }
  }

  private getRouterParam(param: string): string {
    return this.route.snapshot.params[param];
  }

}
