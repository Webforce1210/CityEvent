import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CarteDactiviteComponent } from './carte-dactivite/carte-dactivite.component';
import { CompteComponent } from './compte/compte.component';
import { ContactComponent } from './contact/contact.component';
import { CreationEventComponent } from './creation-event/creation-event.component';
import { FilDactuComponent } from './fil-dactu/fil-dactu.component';
import { InfoEventOfflineComponent } from './info-event-offline/info-event-offline.component';
import { InfoEventComponent } from './info-event/info-event.component';
import { InscriptionActiviteComponent } from './inscription-activite/inscription-activite.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { MesActivitesComponent } from './mes-activites/mes-activites.component';
import { MessageGroupeComponent } from './message-groupe/message-groupe.component';
import { MessagesComponent } from './messages/messages.component';
import { PaiementComponent } from './paiement/paiement.component';
import { PaiementinfosComponent } from './paiementinfos/paiementinfos.component';
import { ParametresComponent } from './parametres/parametres.component';
import { ProfilComponent } from './profil/profil.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: "",
    component: AccueilComponent
  },
  {
    path: "map/:userid",
    component: CarteDactiviteComponent
  },
  {
    path: "compte/:userid",
    component: CompteComponent
  },
  {
    path: "contact/:userid",
    component: ContactComponent
  },
  {
    path: "creation_event/:userid",
    component: CreationEventComponent
  },
  {
    path: "fil_dactu/:userid",
    component: FilDactuComponent
  },
  {
    path: "info_event/:eventid/:userid",
    component: InfoEventComponent
  },
  {
    path: "info_event/:eventid",
    component: InfoEventOfflineComponent
  },
  {
    path: "inscription_activite/:userid",
    component: InscriptionActiviteComponent
  },
  {
    path: "login",
    component: LoginSignupComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "mes_activites/:userid",
    component: MesActivitesComponent
  },
  {
    path: "messages/:userid",
    component: MessagesComponent
  },
  {
    path: "paiement/:userid",
    component: PaiementComponent
  },
  {
    path: "parametres/:userid",
    component: ParametresComponent
  },
  {
    path: "parametres/paiementinfos/:userid",
    component: PaiementinfosComponent
  },
  {
    path: "profil/:userid",
    component: ProfilComponent
  },
  {
    path: "messages/:userid/:discid",
    component: MessageGroupeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
