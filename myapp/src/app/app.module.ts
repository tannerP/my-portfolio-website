import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MenuStateService } from './services/menu-state.service';
import { IgService } from './services/ig.service';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { MainComponent } from './main/main.component';
import { VietnamComponent } from './vietnam/vietnam.component';
import { BittycastingComponent } from './bittycasting/bittycasting.component';
import { LearnMorseCodeComponent } from './learn-morse-code/learn-morse-code.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'blog',    component: BlogComponent },
  { path: 'app/morsecode',    component: LearnMorseCodeComponent},
  { path: '**',         redirectTo: '' },
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PortfolioComponent,
    BlogComponent,
    MainComponent,
    VietnamComponent,
    BittycastingComponent,
    LearnMorseCodeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    MenuStateService,
    IgService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
