import { Injectable } from '@angular/core';
import { UserActivity } from './Models/UserActivity.model';
import { Message } from './Models/Message.model';
import { Discussion } from './Models/Discussion.model';
let uniqid = require('uniqid');
let myData = require("../assets/UserMessage.json");



@Injectable({
  providedIn: 'root'
})

export class UserActivitiesService {

  constructor() {}
  AllMessage:Message[]=[];
  Send:string []=[];
  Recu:string []=[];
  initialized: boolean = false;
  lastMessage: string = ""; 
  currentUser:  UserActivity  = new UserActivity(uniqid());
  discussions:  Discussion = new Discussion();
  messages: Message = new Message();
  Users =  myData.Users;

  create(content:string){
    let newMess= new Message();
    newMess.id = uniqid();
    newMess.content = content;
    this.Send.push(newMess.content);
  } 

  lastMessages(){
    let maxi = this.AllMessage.length;
    for (let i=0 ; i<this.AllMessage.length; i++){
      if (i === maxi-1){
        this.lastMessage = this.AllMessage[i].content
      }
    }
  }

  getUser(id:string|null ){
    for (let user of this.Users){
      if (user.id===id){
        this.currentUser=user;
        break
      }
    }
  }

  getMessagesofUser(Destid:string|null){
    let messid="message_dest:" + Destid;
    for(let mess of this.currentUser.discussions){
      if(messid===mess.id){
        this.discussions = mess;
        this.AllMessage=this.discussions.messages;
        break
      }
    }
  }

  TriMess(){
    for(let mess of this.AllMessage){
      if(mess.Type === true){
        this.Send.push(mess.content)
      }
      else{
        this.Recu.push(mess.content)
      }
      
      
    }
    console.log(this.Send);
  }
}



