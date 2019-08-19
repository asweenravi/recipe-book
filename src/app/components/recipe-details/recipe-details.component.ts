import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: any;
  editable: boolean;
  addNew: boolean;

  ingredientForm = new FormGroup({
    ingredient: new FormControl('', [Validators.required])
  })

  constructor(private _route: ActivatedRoute, private _recipeService: RecipeService) {
    this.editable = false;
    this.addNew = false;
  }

  ngOnInit() {
    this.getRecipe();
  }

  addIngredient() {
    this.recipe.ingredients.push(this.ingredientForm.controls.ingredient.value);
    console.log(this.recipe.ingredients);
    this.revert();
  }

  deleteIngredient(index) {
    this.recipe.ingredients.splice(index, 1);
    if (this.recipe.ingredients.length === 0) {
      this.editable = false;
    }
  }

  getRecipe() {
    this._recipeService.getRecipe(this._route.snapshot.params.id).subscribe((results) => {
      this.recipe = results
      console.log(this.recipe)
    });
  }

  revert() {
    this.ingredientForm.reset();
  }

  updateRecipe() {
    this._recipeService.updateRecipe(this.recipe).subscribe((res)=>
    {
      console.log(res)
    });
  }

}
