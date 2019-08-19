import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe/recipe.service';

@Component({
  selector: 'app-recipe-listing',
  templateUrl: './recipe-listing.component.html',
  styleUrls: ['./recipe-listing.component.css']
})
export class RecipeListingComponent implements OnInit {
  newRecipe:boolean = false;

  recipesData: any;

  recipes: any;

  recipe: object = {
    title: '',
    description: '',
    imageURL: ''
  }

  recipeForm = new FormGroup ({
    title: new FormControl('',[Validators.required]),
    imageURL: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required])
  });

  constructor( private _router: Router, private _recipeService: RecipeService) { }

  ngOnInit() {
    this.getRecipes();
  }

  addRecipe() {
    this.recipe['id'] = this.recipes.length + 1;
    this.recipe['title'] = this.recipeForm.controls.title.value;
    this.recipe['imageURL'] = this.recipeForm.controls.imageURL.value;
    this.recipe['description'] = this.recipeForm.controls.description.value;
    this.recipes.push(this.recipe);
    this.revert();
  }

  getRecipes() {

    this._recipeService.getRecipe().subscribe((results)=>{
      this.recipesData = results['data'];
      this.recipes = [];
      this.recipesData.forEach((elem)=>{
        this.recipes.push(elem.data)
        })
    })
  }

  openDetails(id) {
    this._router.navigate(['recipe', id])
  }

  revert() {
    this.recipeForm.reset();
  }

}
