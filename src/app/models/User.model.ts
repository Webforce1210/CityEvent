export class User {
    hobbies:string[] = [];
    stars:number[] = [0,0,0,0,0];
    cover?:string;
    region?:string;
    
    constructor(
        public id:number, 
        public pseudo:string,
        public events:{id:string,role:string}[],
        public avatar?:string
    ) {}
}