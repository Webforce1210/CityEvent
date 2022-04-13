export class EventActivity {
    id: string;
    title: string;
    adresse: string ="";
    budget?: string;
    date1?: string;
    date2?: string;
    time1?: string;
    time2?: string;
    type?: string;
    participants?: string;
    description: string = "";
    date: string = "";
    active: boolean = true;
    role: string = "Participant";

    constructor(id: string = "", title: string = "") {
        this.id = id;
        this.title = title;
    }
}