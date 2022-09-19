import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { HomeComponent } from './home/home.component';
import { MenComponent } from './men/men.component';
import { ProductsComponent } from './products/products.component';
import { WomenComponent } from './women/women.component';

const routes: Routes = [
  {path:" ",component:HomeComponent},
  {path:"sales",component:ProductsComponent},
  {path:"fashion",component:CardsComponent},
  {path:"women",component:WomenComponent},
  {path:"men",component:MenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
