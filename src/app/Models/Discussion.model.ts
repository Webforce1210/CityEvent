import { MessagePrive } from "./MessagePrive.model";

export class Discussion {

    id:string;
    messages:MessagePrive[]=[];

    constructor (id:string=""){
        this.id=id;
    }
}