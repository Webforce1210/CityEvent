import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EventActivity } from '../models/EventActivity.model';
import uniqid from 'uniqid';
import { NOMEM } from 'dns';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})


export class PaiementComponent implements OnInit {

nomPrenom = new FormControl("");
numeroDeCarte = new FormControl("");
dateDexpiration = new FormControl("");
cvc = new FormControl("");

@Input() nom: string = "";
@Input() prenom: string = "";
@Input() lieu: string = "";

  
  constructor() { }


payer(){
  //je modifie le data.json et a l'interieur de l'objet User je rajoute la propriété cardInfo qui sera de type CreditCardInfo[] (action a part)
  //je modifie le data.json et a l'interieur de l'objet User je rajoute la propriété activities qui sera de type EventAcitivty[] (action a part)
  //a l'interieur du fichier EventActivities.service.ts je recupere la liste des activités de l'utilisateur que j'ai crée au tout debut (a faire dans le fichier eventactivities.service.ts)
  //a l'interieur du fichier EventActivities.service.ts je recupere la liste des CreditCardInfo de l'utilisateur que j'ai crée au tout debut (a faire dans le fichier eventactivities.service.ts)
  //creer un fichier CreditCardInfo.model.ts ou je creerais la classe qui representera le type CreditCardInfo



  //recuperer les données saisies par l'utilisateur: {nom,prenom,lieu....} {nomPrenom, numeroDeCarte, dateDexpiration, cvc}

  //je cree un objet de type EventActivity ou je stockerais les données {nom,prenom,lieu....}

  //je cree un objet de type creditCardInfo ou je stockerais les infos {nomPrenom, numeroDeCarte, dateDexpiration, cvc}

  //j'envois les deux objets crées dans le fichier EventActivities.service.ts ou je pusherais ces deux objets dans les tableaux respectifs ou je suis sensé récuperer les valeurs du fichier data.json


}

  ngOnInit(): void {
  }

}
