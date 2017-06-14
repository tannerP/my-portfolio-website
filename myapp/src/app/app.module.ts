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
import { PhotosComponent } from './photos/photos.component';
import { WorkComponent } from './work/work.component';


const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'about',    component: AboutComponent },
  { path: 'blog',    component: BlogComponent },
  { path: 'portfolio',    component: PortfolioComponent },
  { path: 'photos',    component: PhotosComponent },
  { path: 'work',    component: WorkComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PortfolioComponent,
    BlogComponent,
    MainComponent,
    PhotosComponent,
    WorkComponent
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
