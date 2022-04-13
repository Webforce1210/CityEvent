export class CreditCardInfo {
    nomPrenom: string = "";
    numeroDeCarte: number = 0;
    dateDexpiration: string = "";
    cvc: number = 0;

    constructor(nomPrenom: string = "", numeroDeCarte: number = 0, dateDexpiration: string = "", cvc: number = 0) {
        this.nomPrenom = nomPrenom;
        this.numeroDeCarte = numeroDeCarte;
        this.dateDexpiration = dateDexpiration;
        this.cvc = cvc;
    }
}