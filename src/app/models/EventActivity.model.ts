export class EventActivity {
    id: string;
    title: string;
    adresse: string ="";
    description: string = "";
    date: string = "";
    active: boolean = true;
    role: string = "Participant";

    constructor(id: string = "", title: string = "") {
        this.id = id;
        this.title = title;

    }
}