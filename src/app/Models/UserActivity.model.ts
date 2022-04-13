import { Discussion } from "./Discussion.model";


export class UserActivity{
    id:string;
    name:string="";
    email:string="";
    password:string="";
    discussions:Discussion[]=[];

    constructor(id:string=""){
        this.id = id;
    }
}
