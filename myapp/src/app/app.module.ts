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
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about',    component: AboutComponent },
  { path: 'blog',    component: BlogComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    PortfolioComponent,
    BlogComponent
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
