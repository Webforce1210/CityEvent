import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paiementinfos',
  templateUrl: './paiementinfos.component.html',
  styleUrls: ['./paiementinfos.component.css']
})
export class PaiementinfosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
screen1 = true;
screen2 = false;
screen3 = false;


paiement() {

  this.screen1 = false;
  this.screen2 = true
  this.screen3 = false
}

historique() {

  this.screen1= false;
  this.screen2= false;
  this.screen3 = true;
}

retour() {
  this.screen1 = true;
  this.screen2 = false;
this.screen3 = false;
}


creditcardinfo = {

  Name : "John Doe",
  cardNumber : "xxxx xxxx xxxx xxx34",
  expirationDate : "02/22",
  securityCode : "123"
}

historiquePaiement = [
  
  {
  Date : "xx/xx/2022",
nomActivite : "activité 1",
somme : "xx€"
},

{
  Date : "xx/xx/2022",
nomActivite : "activité 2",
somme : "xx€"

},


{
  Date : "xx/xx/2022",
nomActivite : "activité 3",
somme : "xx€"

},


{
  Date : "xx/xx/2022",
nomActivite : "activité 4",
somme : "xx€"

},

{
  Date : "xx/xx/2022",
nomActivite : "activité 5",
somme : "xx€"

},

{
  Date : "xx/xx/2022",
nomActivite : "activité 6",
somme : "xx€"

},

{
  Date : "xx/xx/2022",
nomActivite : "activité 7",
somme : "xx€"

}

]
}
