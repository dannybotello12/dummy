import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {LandingComponent} from './components/landing/landing.component';
import {PagarComponent} from './components/pagar/pagar.component';
import {DuplicarComponent} from './components/duplicar/duplicar.component';
import {PlantillapagadaComponent} from './components/plantillapagada/plantillapagada.component';
import { ResumenpagoComponent } from './components/resumenpago/resumenpago.component';
import { ModalmesagnoComponent } from './components/modalmesagno/modalmesagno.component';



const APP_ROUTES: Routes = [
  { path: 'home', component:LoginComponent  },
  { path: 'landing', component:LandingComponent  },
  { path: 'pagar', component:PagarComponent  },
  { path: 'duplicar', component:DuplicarComponent  },
  { path: 'plantillapagada', component:PlantillapagadaComponent  },
  { path: 'resumenpago', component:ResumenpagoComponent  },
  { path: 'modalmesagno', component:ModalmesagnoComponent  },


  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{ useHash:true });
