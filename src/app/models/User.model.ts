import { CreditCardInfo } from "./CreditCardInfo.model";
import { EventActivity } from "./EventActivity.model";

export class User {
    id: string="";
    name: string ="";
    email: string= "";
    password: string ="";
    hobbies:string[] = [];
    stars:number[] = [0,0,0,0,0];
    cover?:string;
    region?:string;
    events?:EventActivity[];
    cardInfos?:CreditCardInfo[];
    avatar?: string;
    
    constructor(
        id: string
    ) {
        this.id = id;
    }
}