import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SearchComponent } from './search/search.component';
import { WomenComponent } from './women/women.component';

const routes: Routes = [
  {path:" ",component:HomeComponent},
  {path:"sales",component:ProductsComponent},
  {path:"fashion",component:CardsComponent},
  {path:"women",component:WomenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
