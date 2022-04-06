import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Discussion } from '../models/Discussion.model';
import { UserActivitiesService } from '../user-activities.service';


@Component({
  selector: 'app-message-groupe',
  templateUrl: './message-groupe.component.html',
  styleUrls: ['./message-groupe.component.css']
})
export class MessageGroupeComponent implements OnInit {

  messages:any=[];
  discussion!:Discussion;


  constructor(
    private userService:UserActivitiesService,
    private route:ActivatedRoute) {

  }
  ngOnInit(): void {
    this.findDiscussion();
    this.messages=this.userService.findDiscussionMessages(this.discussion.id)
  }

  private findDiscussion():void{
      this.discussion = this.userService.getDiscussionById(this.getRouterParam('discid'));
  }

  private getRouterParam(param: string): string {
    return this.route.snapshot.params[param];
  }

}

