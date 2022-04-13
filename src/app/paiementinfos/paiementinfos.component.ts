import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CreditCardValidators } from 'angular-cc-library';
const maskify = require('maskify');


@Component({

  selector: 'app-paiementinfos',
  templateUrl: './paiementinfos.component.html',
  styleUrls: ['./paiementinfos.component.css']

})



export class PaiementinfosComponent implements OnInit {
  submitted: boolean = false;



  cardForm = new FormGroup({

    cardNameValue: new FormControl('', Validators.required),

    cardNumberValue: new FormControl('', [CreditCardValidators.validateCCNumber]),

    cardExpirationValue: new FormControl('', [CreditCardValidators.validateExpDate]),

    cardSecurityCodeValue: new FormControl('',
      [Validators.required, Validators.minLength(3), Validators.maxLength(4)],
    )
  });


  ngOnInit(): void {
  }




  screen1 = true;
  screen2 = false;
  screen3 = false;
  cardmodify = false;


  paiement() {

    this.screen1 = false;
    this.screen2 = true
    this.screen3 = false
    this.cardmodify = false;
  }

  historique() {

    this.screen1 = false;
    this.screen2 = false;
    this.screen3 = true;

    this.cardmodify = false;
  }

  retour() {
    this.screen1 = true;
    this.screen2 = false;
    this.screen3 = false;

    this.cardmodify = false;
  }

  changeCardInfo() {
    this.screen1 = false;
    this.screen2 = false;
    this.screen3 = false;

    this.cardmodify = true;



  }


  addCardInfo() {
    this.screen1 = false;
    this.screen2 = false;
    this.screen3 = false;
    this.cardmodify = false;



  }

  findInvalidControls() {
    const invalid:string[] = [];
    const controls = this.cardForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
        console.log(invalid)
      }
    }
    return invalid

  }




  creditcardinfo = {

    Name: "John Doe",
    cardNumber: "xxxx xxxx xxxx xx34",
    expirationDate: "02/22",
    securityCode: "123"


  }






  changeCard() {
    let message = document.getElementById('message');
    let messagesuccess = document.getElementById('messagesuccess');


    if (this.cardForm.valid) {

      this.creditcardinfo.Name = this.cardForm.get('cardNameValue')?.value;
      this.creditcardinfo.cardNumber = maskify(this.cardForm.get('cardNumberValue')?.value);
      this.creditcardinfo.expirationDate = maskify(this.cardForm.get('cardExpirationValue')?.value);
      this.creditcardinfo.securityCode = this.cardForm.get('cardSecurityCodeValue')?.value;

      this.cardForm.reset()

      this.paiement();



    }


    else if (message) {



      message.innerHTML = "Carte non valide, merci de vérifier vos informations de paiement. ";

    }






  }



  deleteCard() {


    this.creditcardinfo.Name = "";
    this.creditcardinfo.cardNumber = "";
    this.creditcardinfo.expirationDate = "";
    this.creditcardinfo.securityCode = "";


    console.log(this.creditcardinfo);


  }






  historiquePaiement = [

    {
      Date: "xx/xx/2022",
      nomActivite: "activité 1",
      somme: "xx€"
    },

    {
      Date: "xx/xx/2022",
      nomActivite: "activité 2",
      somme: "xx€"

    },


    {
      Date: "xx/xx/2022",
      nomActivite: "activité 3",
      somme: "xx€"

    },


    {
      Date: "xx/xx/2022",
      nomActivite: "activité 4",
      somme: "xx€"

    },

    {
      Date: "xx/xx/2022",
      nomActivite: "activité 5",
      somme: "xx€"

    },

    {
      Date: "xx/xx/2022",
      nomActivite: "activité 6",
      somme: "xx€"

    },

    {
      Date: "xx/xx/2022",
      nomActivite: "activité 7",
      somme: "xx€"

    }

  ]




}