export class EventActivity {
    id: string;
    title: string;
    adresse: string ="";
    description: string = "";
    date:Date;

    constructor(id: string = "", title: string = "") {
        this.id = id;
        this.title = title;
        this.date = new Date();
    }
}