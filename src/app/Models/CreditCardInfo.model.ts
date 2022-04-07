export class CreditCardInfo {
    id: string = "";
    userId: string = "";
    username: string = "";
    cardNumber: number = 0;
    expirationDate: string = "";
    cvc: number = 0;

    constructor(id: string = "", userId: string = "") {
        this.id = id;
        this.userId = userId;
    }
}