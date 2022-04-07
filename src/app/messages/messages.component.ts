import { Component, OnInit } from '@angular/core';
import { UserActivitiesService } from '../user-activities.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Discussion } from '../models/Discussion.model';
import { UserService } from '../user.service';
import { MessagePrive } from '../models/MessagePrive.model';
import { table } from 'console';
import { User } from '../models/User.model';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})

export class MessagesComponent implements OnInit {

  userId!:string;
  discId!:string;
  mydiscussion!:Discussion[];
  mylast!:MessagePrive[];
  listMessage:string[]=[];
  destids!:string[];
  dest!:User;
  destid!:string;


  constructor(private router: Router,
    private storage:UserActivitiesService, 
    private route :ActivatedRoute, 
    private userService: UserService) { }
  
  ngOnInit(): void {

    this.checkSession();
    this.mydiscussion = this.storage.AfficheDiscussion(this.userId);
    this.trieDisc();
    console.log(this.listMessage)
    this.dest = this.userService.findUserById(this.destid);
  }

  private checkSession(): void {
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
    let Message = this.mylast[this.mylast.length-1].message
    return Message;
    }

private trieDisc(){
  this.mydiscussion.forEach(e => {

    this.mylast = this.storage.findDiscussionMessages(e.id);

    this.discId = e.id;
    this.destids = e.userid
    this.destids.forEach(elem=>{
      if(elem != this.userId ){
        this.destid = elem
      }
    })
    this.listMessage.push(this.LastMessages());
  });
}

}


