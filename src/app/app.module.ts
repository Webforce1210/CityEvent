import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { FilDactuComponent } from './fil-dactu/fil-dactu.component';
import { CarteDactiviteComponent } from './carte-dactivite/carte-dactivite.component';
import { CreationEventComponent } from './creation-event/creation-event.component';
import { CompteComponent } from './compte/compte.component';
import { ProfilComponent } from './profil/profil.component';
import { InfoEventComponent } from './info-event/info-event.component';
import { MesActivitesComponent } from './mes-activites/mes-activites.component';
import { MessagesComponent } from './messages/messages.component';
import { ParametresComponent } from './parametres/parametres.component';
import { PaiementComponent } from './paiement/paiement.component';
import { ContactComponent } from './contact/contact.component';
import { InscriptionActiviteComponent } from './inscription-activite/inscription-activite.component';
import { PaiementinfosComponent } from './paiementinfos/paiementinfos.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    LoginSignupComponent,
    FilDactuComponent,
    CarteDactiviteComponent,
    CreationEventComponent,
    CompteComponent,
    ProfilComponent,
    InfoEventComponent,
    MesActivitesComponent,
    MessagesComponent,
    ParametresComponent,
    PaiementComponent,
    ContactComponent,
    InscriptionActiviteComponent,
    PaiementinfosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
