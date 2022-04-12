import { Injectable } from '@angular/core';
import { Discussion } from './models/Discussion.model';
import { MessagePrive } from './models/MessagePrive.model';
import { UserService } from './user.service';
let myData = require("../assets/discussion.json");
let uniqid=require('uniqid');


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
      element.messages.forEach(e => {
        e.author = this.userService.findUserById(e.userid)
      })
      if(element.id === discId ){
        messages = element.messages
      };
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


 public createDiscussion(destid:string){
  let discussion:Discussion
  discussion= new Discussion(
    uniqid(),
  )
  discussion.userid=[this.UserId,destid]
 }

// recuperation de toutes les discussion de l'utilisateur
  public AfficheDiscussion(UserId:string){
    const mydiscussion:Discussion [] = [];
    this.discussion.forEach(element => {
      if(element.userid.includes(UserId)){
        mydiscussion.push(element);
        if(element.name===undefined){
          element.userid.forEach(e => {
            if(e!==UserId){
              element.name = this.userService.findUserById(e).pseudo
            }
          });
        }
        element.lastmessages=element.messages[element.messages.length-1].message
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



