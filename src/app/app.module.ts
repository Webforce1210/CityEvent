import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
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
import { InscriptionActiviteComponent } from './inscription-activite/inscription-activite.component';
import { MessageGroupeComponent } from './message-groupe/message-groupe.component';
import { PaiementinfosComponent } from './paiementinfos/paiementinfos.component';
import { FormsModule } from '@angular/forms';
import { CreditCardDirectivesModule } from 'angular-cc-library';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { InfoEventOfflineComponent } from './info-event-offline/info-event-offline.component';
import { NavbarOfflineComponent } from './navbar-offline/navbar-offline.component';
import { RegisterComponent } from './register/register.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { ContactComponent } from './contact/contact.component';


// import florent pour format date
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { ViewBandeauComponent } from './view-bandeau/view-bandeau.component';
import { EditBandeauComponent } from './edit-bandeau/edit-bandeau.component';
registerLocaleData(localeFr, 'fr');

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
    MessageGroupeComponent,
    ParametresComponent,
    PaiementComponent,
    InscriptionActiviteComponent,
    PaiementinfosComponent,
    NavbarComponent,
    FooterComponent,
    RegisterComponent,
    ViewBandeauComponent,
    EditBandeauComponent,
    ContactComponent,
    InfoEventOfflineComponent,
    NavbarOfflineComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CreditCardDirectivesModule,
    PickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
