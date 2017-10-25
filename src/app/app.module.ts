import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {APP_ROUTING} from './app.routes';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
import { DuplicarComponent } from './components/duplicar/duplicar.component';
import { PagarComponent } from './components/pagar/pagar.component';
import { PlantillapagadaComponent } from './components/plantillapagada/plantillapagada.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ResumenpagoComponent } from './components/resumenpago/resumenpago.component';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { ModalmesagnoComponent } from './components/modalmesagno/modalmesagno.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    LandingComponent,
    DuplicarComponent,
    PagarComponent,
    PlantillapagadaComponent,
    FooterComponent,
    ResumenpagoComponent,
    ConfirmComponent,
    
    ModalmesagnoComponent
  ],
  imports: [
    BrowserModule,APP_ROUTING,BootstrapModalModule,CommonModule
  ],

  entryComponents: [
      ConfirmComponent
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
