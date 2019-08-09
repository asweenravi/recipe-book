import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeBookComponent } from './states/recipe-book/recipe-book.component';
import { ShoppingComponent } from './states/shopping/shopping.component';
import { RecipeDetailComponent } from './states/recipe-detail/recipe-detail.component';


const routes: Routes = [
  {path: '', component: RecipeBookComponent},
  {path: 'recipe', component: RecipeBookComponent},
  {path: 'shopping', component: ShoppingComponent},
  {path: 'recipe/:id', component: RecipeDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
