import { CreditCardInfo } from "./CreditCardInfo.model";
import { EventActivity } from "./EventActivity.model";

export class User {
    hobbies: string[] = [];
    stars?: number[] = [0, 0, 0, 0, 0];
    cover?: string | null;
    region?: string;
    email?: string;
    password?: string;

    constructor(
        public id: string,
        public pseudo: string,
        public events: any[],
        public avatar?: string | null,
        public name?: string

        // public region: string,
        // public cover: string,
        // public hobbies?: string
    ) { }
}