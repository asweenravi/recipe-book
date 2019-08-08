import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeBookComponent } from './states/recipe-book/recipe-book.component';
import { ShoppingComponent } from './states/shopping/shopping.component';


const routes: Routes = [
  {path: '', component: RecipeBookComponent},
  {path: 'home', component: RecipeBookComponent},
  {path: 'shopping', component: ShoppingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
