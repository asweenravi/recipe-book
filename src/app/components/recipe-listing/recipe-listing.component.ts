import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-listing',
  templateUrl: './recipe-listing.component.html',
  styleUrls: ['./recipe-listing.component.css']
})
export class RecipeListingComponent implements OnInit {

  recipes: any = [
    {
      title: 'Lamb kebab burger',
      description: 'Jazz up a shop-bought lamb burger with garlic mayo, gherkins and chilli for a hot and spicy twist. Perfect for lazy summer weekends',
      imageURL: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2019/05/hot-and-spicy-burgers.jpg?itok=Ao-88qqa'
    },
    {
      title: 'Chicken & mushroom spud pies',
      description: 'Jazz up a jacket potato with this creamy filling',
      imageURL: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--792455_11.jpg?itok=wRvrD2ir'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
