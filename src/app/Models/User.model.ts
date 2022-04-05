export class User {
    id: string;
    name: string;
    email: string;
    password: string;
    hobbies: string [] = [];
    regions: string [] = [];


    constructor(id: string = "",  name: string = "", email:string ="", password: string = "") {
        this.id = id;
        this.email = email;
        this.password = password;
        this.name = name;
    }
}