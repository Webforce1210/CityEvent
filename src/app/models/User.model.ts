export class User {
    hobbies:string[] = [];
    
    constructor(
        public id:number, 
        public pseudo:string,
        public events:{id:string,role:string}[],
        public avatar?:string
    ) {}
}