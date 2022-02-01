import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CarteDactiviteComponent } from './carte-dactivite/carte-dactivite.component';
import { CompteComponent } from './compte/compte.component';
import { ContactComponent } from './contact/contact.component';
import { CreationEventComponent } from './creation-event/creation-event.component';
import { FilDactuComponent } from './fil-dactu/fil-dactu.component';
import { InfoEventComponent } from './info-event/info-event.component';
import { InscriptionActiviteComponent } from './inscription-activite/inscription-activite.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { MesActivitesComponent } from './mes-activites/mes-activites.component';
import { PaiementComponent } from './paiement/paiement.component';
import { PaiementinfosComponent } from './paiementinfos/paiementinfos.component';
import { ParametresComponent } from './parametres/parametres.component';
import { ProfilComponent } from './profil/profil.component';

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
    path: "info_event/:userid",
    component: InfoEventComponent
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
    path: "mes_activites/:userid",
    component: MesActivitesComponent
  },
  {
    path: "messages/:userid",
    component: MessageChannel
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
