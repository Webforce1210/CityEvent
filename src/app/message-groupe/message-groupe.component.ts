import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Discussion } from '../models/Discussion.model';
import { MessagePrive } from '../models/MessagePrive.model';
import { UserActivitiesService } from '../user-activities.service';
import { UserService } from '../user.service';
let uniqid= require('uniqid');

@Component({
  selector: 'app-message-groupe',
  templateUrl: './message-groupe.component.html',
  styleUrls: ['./message-groupe.component.css']
})
export class MessageGroupeComponent implements OnInit {

  userId!:string;
  messages:MessagePrive[]=[];
  newMessageValue= new FormControl("");
  discussion!:Discussion;


  constructor(
    private userService:UserActivitiesService,
    private route:ActivatedRoute,
    private storage: UserService,
    private router:Router) {

  }
  ngOnInit(): void {
    this.checkSession();
    this.findDiscussion();
    this.messages = this.userService.findDiscussionMessages(this.discussion.id);
  }

  private checkSession():void {
    try {
      const id: string = this.getRouterParam('userid');
      this.userId = this.storage.findUserById(id).id;
    } catch (error) {
      this.router.navigateByUrl('/login');
    }
  }
  addMessage(){
    const message = new MessagePrive(
      uniqid(),
      this.userId,
      this.newMessageValue.value,
      new Date().toString()
    );
    this.userService.addMessage(message);
    this.messages.push(message);
    this.newMessageValue = new FormControl("");
  }


  private findDiscussion():void{
      this.discussion = this.userService.getDiscussionById(this.getRouterParam('discid'));
  }

  private getRouterParam(param: string): string {
    return this.route.snapshot.params[param];
  }
}

