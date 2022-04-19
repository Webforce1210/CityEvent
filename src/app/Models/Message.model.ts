import { User } from "./User.model";

export class Message {
    author!: { id: string, pseudo: string, avatar: string };
    createdAt!: Date;

    constructor(
        public id: string | number,
        public userid: string | number,
        public message: string,
        public eventId: string,
        public date: string
    ) {
        this.createdAt = new Date(date);
    }
}