export class EventActivity {
    id: string;
    title: string;
    adresse: string = "";
    budget?: string;
    date1?: string;
    date2?: string;
    time1?: string;
    time2?: string;
    type?: string;
    participants?: string;
    description: string = "";
    date: string = ""; // = date1 + time1 Florent
    date_debut: { date: string, timezone_type: number, timezone: string } = { date: '', timezone_type: 3, timezone: "Europe/Berlin" };
    userEvents: { id: number, active: boolean, role: string, user: { id: number, pseudo: string, avatar: string } }[] = [];
    messageActivites: { id: number, message: string, date: { date: string }, user: { id: number, pseudo: string, avatar: string } }[] = [];
    activity: string = "";
    active: boolean = true;
    role: string = "Participant";

    constructor(id: string = "", title: string = "") {
        this.id = id;
        this.title = title;
    }
}