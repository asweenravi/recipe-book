import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-listing',
  templateUrl: './recipe-listing.component.html',
  styleUrls: ['./recipe-listing.component.css']
})
export class RecipeListingComponent implements OnInit {
  newRecipe:boolean = false;

  recipes: any = [
    {
      id: 1,
      title: 'Lamb kebab burger',
      description: 'Jazz up a shop-bought lamb burger with garlic mayo, gherkins and chilli for a hot and spicy twist. Perfect for lazy summer weekends',
      imageURL: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2019/05/hot-and-spicy-burgers.jpg?itok=Ao-88qqa'
    },
    {
      id: 2,
      title: 'Chicken & mushroom spud pies',
      description: 'Jazz up a jacket potato with this creamy filling',
      imageURL: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--792455_11.jpg?itok=wRvrD2ir'
    }
  ]

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

  constructor( private router: Router) { }

  ngOnInit() {
  }

  revert() {
    this.recipeForm.reset();
  }

  addRecipe() {
    this.recipe['id'] = this.recipes.length + 1;
    this.recipe['title'] = this.recipeForm.controls.title.value;
    this.recipe['imageURL'] = this.recipeForm.controls.imageURL.value;
    this.recipe['description'] = this.recipeForm.controls.description.value;
    this.recipes.push(this.recipe);
    this.revert();
  }

  openDetails(id) {
    this.router.navigate(['recipe', id])
  }

}
