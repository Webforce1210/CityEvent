import { User } from "./User.model";

export class Message {
    author!: User;
    createdAt!: Date;

    constructor(
        public id: string,
        public userid: string,
        public message: string,
        public eventId: string,
        public date: string
    ) {
        this.createdAt = new Date(date);
    }
}