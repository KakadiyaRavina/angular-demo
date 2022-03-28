import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TextImageBlockComponent } from './text-image-block/text-image-block.component';
import { FooterComponent } from './footer/footer.component';
import { AboutCtnComponent } from './about-ctn/about-ctn.component';
import { InnerPageBannerComponent } from './inner-page-banner/inner-page-banner.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HomeBannerComponent,
    TextImageBlockComponent,
    FooterComponent,
    AboutCtnComponent,
    InnerPageBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
