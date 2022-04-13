import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../contact.service';
import { Discussion } from '../models/Discussion.model';
import { User } from '../models/User.model';
import { UserActivitiesService } from '../user-activities.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private storage:ContactService,
    private userService:UserService,
    private messageService:UserActivitiesService, 
    private route:ActivatedRoute,
    private router:Router) { }
  userId!:string;
  Contacts:User[]=[];
  boo!:boolean;



  ngOnInit(): void {
    this.checkSession();
    this.Contacts = this.storage.addContactbyid(this.userId);
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

  getjoindiscussion(destid:string){
    let discussion:Discussion[]=[]
    let discussionid!:string
    discussion = this.messageService.AfficheDiscussion(this.userId);;
    discussion.forEach(element => {
      if(element.userid.includes(destid) && element.userid.length<=2 ){
      
        discussionid=element.id
        this.router.navigateByUrl(`/messages/${this.userId}/${discussionid}`);
      }
      else if(!element.userid.includes(destid)){
        this.messageService.createDiscussion(this.userId,destid)
      }
      
    });
  }


}