import { Injectable } from '@angular/core';
import { Discussion } from './models/Discussion.model';
import { MessagePrive } from './models/MessagePrive.model';
import { UserService } from './user.service';
let myData = require("../assets/discussion.json");


@Injectable({
  providedIn: 'root'
})

export class UserActivitiesService {

  UserId!:string;
  discussion:Discussion[] = myData.discussion;
  messages:MessagePrive[] = [];
  mydiscussion:[] = [];
  lastMessage!:MessagePrive;

  constructor(private userService:UserService){
    this.discussion = myData.discussion;
  }
// recuperation des messages de la discussion avec son id
  public findDiscussionMessages(discId:string){
    let messages: MessagePrive[] = [];
    this.discussion.forEach(element=>{
      if(element.id === discId ){
        messages = element.messages
      }
    });
    return messages;
    
  }

  public NameDiscussion(discId:string){
    let name:string[]=[];
    this.discussion.forEach(element=>{
      if(element.id === discId){
        if(element.name !== undefined){
          name.push(element.name)
        }else{
          element.userid.forEach(elem => {
            name.push(this.userService.findUserById(elem).pseudo)
          });
        }
      }
      
    });
    return name;
  }



// recuperation de toutes les discussion de l'utilisateur
  public AfficheDiscussion(UserId:string){
    const mydiscussion:Discussion [] = [];
    this.discussion.forEach(element => {
      if(element.userid.includes(UserId)){
        
        mydiscussion.push(element);
      }
    });
    return mydiscussion;
  }

  // recuperation de la discussion par un id 
  getDiscussionById(id:string):Discussion{
    const data = this.discussion.find(discussion=>discussion.id === id);
    if(data===undefined){
      throw new Error('Discussion not found');
    }else{
      const discussion = new Discussion(data.id);
      discussion.messages=data.messages;
      return discussion;
    }
  }
  public addMessage(message: MessagePrive) {
    message.author = this.userService.findUserById(message.userid);
    this.messages.push(message);
  }
}



