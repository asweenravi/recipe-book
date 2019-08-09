import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipe = {
    id: 1,
    title: 'Lamb kebab burger',
    description: 'Jazz up a shop-bought lamb burger with garlic mayo, gherkins and chilli for a hot and spicy twist. Perfect for lazy summer weekends',
    imageURL: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2019/05/hot-and-spicy-burgers.jpg?itok=Ao-88qqa'
  }

  constructor() { }

  ngOnInit() {
  }

}
