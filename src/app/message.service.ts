import { Injectable } from '@angular/core';
import { Message } from './models/Message.model';
import { UserService } from './user.service';
let myData = require("../assets/data.json");

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: Message[];

  constructor(private userService: UserService) {
    this.messages = myData.messagesChat;
  }

  public findEventMessages(eventId: string): Message[] {
    const messages: Message[] = [];

    this.messages.forEach(element => {
      if (element.eventId === eventId) {
        messages.push(element);
      }
    });

    return messages;
  }

  public addMessage(message: Message) {
    this.messages.push(message);
  }
}
