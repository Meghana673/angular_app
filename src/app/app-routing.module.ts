import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllproductComponent } from './allproduct/allproduct.component';
import { CardsComponent } from './cards/cards.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { DealsComponent } from './deals/deals.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenComponent } from './men/men.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { TdealsComponent } from './tdeals/tdeals.component';
import { WomenComponent } from './women/women.component';

const routes: Routes = [
  {path:" ",component:HomeComponent},
  {path:"sales",component:ProductsComponent},
  {path:"fashion",component:CardsComponent},
  {path:"women",component:WomenComponent},
  {path:"men",component:MenComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"products",component:AllproductComponent},
  {path:"cart",component:CartItemsComponent},
  {path:"deals",component:TdealsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
