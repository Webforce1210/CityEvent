import { MessagePrive } from "./MessagePrive.model";

export class Discussion {

    id:string;
    name?:string;
    userid:string[]=[];
    messages:MessagePrive[]=[];
    lastmessages?:string;
    avatar?:string|null;

    constructor (id:string=""){
        this.id=id;
    }
}