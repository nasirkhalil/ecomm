import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
// import { DataService } from '..//service/data.service';
import { DataService } from './service/data.service';
import { MDBBootstrapModulesPro , MDBSpinningPreloader, ToastModule, WavesModule, PreloadersModule } from 'ng-uikit-pro-standard';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { routing } from './router/router.module';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { FilterPipe} from './filter.pipe';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    CartComponent,
    CheckoutComponent,
    ProductDetailsComponent,
    FilterPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    routing,
    PreloadersModule,
    MDBBootstrapModulesPro.forRoot(),
    WavesModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
  providers: [DataService, MDBSpinningPreloader],
  bootstrap: [AppComponent]
})
export class AppModule { }
