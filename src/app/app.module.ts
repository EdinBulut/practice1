import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SliderComponent } from './shared/components/slider/slider.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { LazyimgDirective } from './lazyimg.directive';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    ProductsComponent,
    ContactComponent,
    SliderComponent,
    LazyimgDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxUsefulSwiperModule,
    LeafletModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
