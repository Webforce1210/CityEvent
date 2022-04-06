import { User } from "./User.model";

export class MessagePrive {
    author!: User;
    createdAt!: Date;
    dest!: User;

    constructor(
        public id: string,
        public userid: string,
        public destid: string,
        public message: string,
        public date: string
    ) {
        this.createdAt = new Date(date);
    }
}