import { MessagePrive } from "./MessagePrive.model";

export class Discussion {

    id:string;
    name?:string;
    userid:string[]=[];
    messages:MessagePrive[]=[];

    constructor (id:string=""){
        this.id=id;
    }
}