import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ChooseneighborhoodComponent } from './pages/chooseneighborhood/chooseneighborhood.component';
import { NeighbourhoodpageComponent } from './pages/neighbourhoodpage/neighbourhoodpage.component';
import { ProfileComponent } from './pages/profile/profile.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'chooseneighborhood', component: ChooseneighborhoodComponent },
  { path: 'neighborhood', component: NeighbourhoodpageComponent },
  { path: 'user', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
