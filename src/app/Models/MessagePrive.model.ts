import { User } from "./User.model";

export class MessagePrive {
    author!: User;
    createdAt!: Date;

    constructor(
        public id: string,
        public userid: string,
        public message: string,
        public date: string
    ) {
        this.createdAt = new Date(date);
    }
}