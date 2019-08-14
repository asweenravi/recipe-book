import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipe = {
    id: 2,
    title: 'Chicken & mushroom spud pies',
    description: 'Jazz up a jacket potato with this creamy filling',
    imageURL: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--792455_11.jpg?itok=wRvrD2ir',
    ingredients: ['lamb','buns']
  }
  editable: boolean;
  addNew: boolean;

  ingredientForm = new FormGroup ({
    ingredient: new FormControl ('', [])
  })

  constructor() { 
    this.editable = false;
    this.addNew = false;
  }

  ngOnInit() {
  }

  revert() {
    this.ingredientForm.reset();
  }

  addIngredient() {
    this.recipe.ingredients.push(this.ingredientForm.controls.ingredient.value);
    console.log(this.recipe.ingredients);
    this.revert();
  }

  deleteIngredient(index) {
    this.recipe.ingredients.splice(index,1);
  }

}
