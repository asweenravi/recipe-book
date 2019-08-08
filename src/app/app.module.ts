import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeListingComponent } from './components/recipe-listing/recipe-listing.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { HeaderComponent } from './components/header/header.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { RecipeBookComponent } from './states/recipe-book/recipe-book.component';
import { ShoppingComponent } from './states/shopping/shopping.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListingComponent,
    RecipeDetailsComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeBookComponent,
    ShoppingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
