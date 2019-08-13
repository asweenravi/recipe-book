import { Component, OnInit } from '@angular/core';

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

  constructor() { 
    this.editable = false;
  }

  ngOnInit() {
  }

}
