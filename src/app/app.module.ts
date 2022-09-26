import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { CardsComponent } from './cards/cards.component';
import { ProductsComponent } from './products/products.component';
import { WomenComponent } from './women/women.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { DealsComponent } from './women/deals/deals.component';
import { CategoryComponent } from './category/category.component';
import { WcategoryComponent } from './home/wcategory/wcategory.component';
import { McategoryComponent } from './home/mcategory/mcategory.component';
import { CounterComponent } from './counter/counter.component';
import { CounterchildComponent } from './counter/counterchild/counterchild.component';
import { MenComponent } from './men/men.component';
import { ContactComponent } from './contact/contact.component';
import { ShirtsComponent } from './men/shirts/shirts.component';
import { TypesComponent } from './men/types/types.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AllproductComponent } from './allproduct/allproduct.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { TdealsComponent } from './tdeals/tdeals.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    SearchComponent,
    CardsComponent,
    ProductsComponent,
    WomenComponent,
    AdvertisementComponent,
    DealsComponent,
    CategoryComponent,
    WcategoryComponent,
    McategoryComponent,
    CounterComponent,
    CounterchildComponent,
    MenComponent,
    ContactComponent,
    ShirtsComponent,
    TypesComponent,
    RegisterComponent,
    LoginComponent,
    AllproductComponent,
    CartItemsComponent,
    TdealsComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
