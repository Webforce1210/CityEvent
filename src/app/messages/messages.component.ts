import { Component, OnInit } from '@angular/core';
import { UserActivitiesService } from '../user-activities.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Discussion } from '../models/Discussion.model';
import { UserService } from '../user.service';
import { MessagePrive } from '../models/MessagePrive.model';
import { User } from '../models/User.model';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})

export class MessagesComponent implements OnInit {

  userId!:string;
  mydiscussion!:Discussion[];
  mydiscussionmessages!:MessagePrive[];
  destids:string[]=[];
  destid!:string;
  tabdiscu: MessagePrive[]=[];
  dest: User[]=[];
  name:Discussion[]=[];


  constructor(private router: Router,
    private storage:UserActivitiesService, 
    private route :ActivatedRoute, 
    private userService: UserService) {}
  
  ngOnInit(): void {
    this.checkSession();
    this.mydiscussion = this.storage.AfficheDiscussion(this.userId);
    this.trieDisc();
    this.name.push(this.nameDisc())
    console.log(this.name)
  }

  private checkSession():void {
    try {
      const id: string = this.getRouterParam('userid');
      this.userId = this.userService.findUserById(id).id;
    } catch (error) {
      this.router.navigateByUrl('/login');
    }
  }
  private getRouterParam(param: string): string {
    return this.route.snapshot.params[param];
  }
  
  public LastMessages(){
    this.tabdiscu.push(this.mydiscussionmessages[this.mydiscussionmessages.length-1]);
  }


  private trieDisc(){
    this.mydiscussion.forEach(e => {
      this.mydiscussionmessages = this.storage.findDiscussionMessages(e.id);
      this.LastMessages();
    });
  }

  private nameDisc(){ 
    let discussion = new Discussion()
    this.mydiscussion.forEach(e => {
      discussion.name = e.name
      discussion.id = e.id
      discussion.messages=e.messages
    });return discussion
    
  }
}


