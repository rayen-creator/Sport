import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DisplaymatchComponent } from './components/displaymatch/displaymatch.component';
import { DisplayplayerComponent } from './components/displayplayer/displayplayer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MacthesComponent } from './components/macthes/macthes.component';
import { PlayerComponent } from './components/player/player.component';
import { SignupComponent } from './components/signup/signup.component';
import { TeamsComponent } from './components/teams/teams.component';
import { ResMatchesComponent } from './components/res-matches/res-matches.component';
import { DisplayteamComponent } from './components/displayteam/displayteam.component';
import { EditplayerComponent } from './components/editplayer/editplayer.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'admin',component:AdminComponent},
  {path:'teams',component:TeamsComponent},
  {path:'player',component:PlayerComponent},
  {path:'matches',component:MacthesComponent},
  {path:'res-matches',component:ResMatchesComponent},
  {path:'displayplayer/:id',component:DisplayplayerComponent},
  {path:'displaymatch/:id',component:DisplaymatchComponent},
  {path:'displayteam/:id',component:DisplayteamComponent},
  {path:'editplayer/:id',component:EditplayerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
