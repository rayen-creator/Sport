import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { NewsComponent } from './components/news/news.component';
import { VideoComponent } from './components/video/video.component';
import { TableComponent } from './components/table/table.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminComponent } from './components/admin/admin.component';
import { PlayerComponent } from './components/player/player.component';
import { TeamsComponent } from './components/teams/teams.component';
import { MacthesComponent } from './components/macthes/macthes.component';
import { TableteamsComponent } from './components/tableteams/tableteams.component';
import { TableplayersComponent } from './components/tableplayers/tableplayers.component';
import { TablematchesComponent } from './components/tablematches/tablematches.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResMatchesComponent } from './components/res-matches/res-matches.component';
import { ResultatComponent } from './components/resultat/resultat.component';
import { NewsplayerComponent } from './components/newsplayer/newsplayer.component';
import { DisplayplayerComponent } from './components/displayplayer/displayplayer.component';
import { DisplaymatchComponent } from './components/displaymatch/displaymatch.component';
import { DisplayteamComponent } from './components/displayteam/displayteam.component';
import { DataService } from 'src/services/data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { EditplayerComponent } from './components/editplayer/editplayer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    NewsComponent,
    VideoComponent,
    TableComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    PlayerComponent,
    TeamsComponent,
    MacthesComponent,
    TableteamsComponent,
    TableplayersComponent,
    TablematchesComponent,
    ResMatchesComponent,
    ResultatComponent,
    NewsplayerComponent,
    DisplayplayerComponent,
    DisplaymatchComponent,
    DisplayteamComponent,
    EditplayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // InMemoryWebApiModule.forRoot(DataService),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
