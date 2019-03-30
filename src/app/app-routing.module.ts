import { NgModule } from '@angular/core';
import {PreloadAllModules, PreloadingStrategy, RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {SignupComponent} from "./pages/signup/signup.component";
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {GestionComponent} from './pages/gestion/gestion.component';
import {GestionStandsComponent} from './pages/gestionStands/gestionStands.component';
import {GestionBenevolesComponent} from './pages/gestionBenevoles/gestionBenevoles.component';


const appRoutes: Routes = [
  { path: '',pathMatch: 'full', redirectTo: 'dashboard'},
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'gestion', component: GestionComponent},
  { path: 'gestionstands', component: GestionStandsComponent},
  { path: 'gestionbenevoles', component: GestionBenevolesComponent}
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

