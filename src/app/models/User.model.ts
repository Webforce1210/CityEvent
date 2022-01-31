export class User {
    
    constructor(
        public id:number, 
        public pseudo:string,
        public events:{id:string,role:string}[],
        public avatar?:string
    ) {}
}