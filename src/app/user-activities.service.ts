import { Injectable } from '@angular/core';
import { Discussion } from './models/Discussion.model';
import { MessagePrive } from './models/MessagePrive.model';
let myData = require("../assets/data.json");


@Injectable({
  providedIn: 'root'
})

export class UserActivitiesService {

  discussion:Discussion[] = myData.discussion;
  messages:MessagePrive[]=[];

  constructor(){
    this.discussion=myData.discussion;
  }

  public findDiscussionMessages(discId:string){
    const messages:any = [];
    this.discussion.forEach(element=>{
      if(element.id === discId ){
        messages.push(element.messages)
      }
    });
    return messages;
  }

  public LastMessage(){
    
  }

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
}



