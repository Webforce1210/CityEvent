export class User {
    hobbies: string[] = [];
    stars: number[] = [0, 0, 0, 0, 0];
    cover?: string;
    region?: string;
    email?: string;
    password?: string;
    regions: string[] = [];

    constructor(
        public id: string,
        public pseudo: string,
        public events: { id: string, role: string }[],
        public avatar?: string
    ) { }
}