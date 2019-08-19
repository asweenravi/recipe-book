import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeList: any;
  constructor(private _httpService: HttpService) { }

  getRecipes() {
    return this._httpService.get('recipes');
  }

  getRecipe(id): Observable<any> {
    var recipe = new Subject<any>();
    this.getRecipes().subscribe((results) => {
      this.recipeList = results['data'];
      var recipes = [];
      this.recipeList.forEach((elem) => {
        recipes.push(elem.data)
      })
      var data = recipes.filter((recipe) => {
        return recipe.id == parseInt(id);
      })
      recipe.next(data[0]);

    });
    return recipe.asObservable();
  }

  addRecipe(body) {
    return this._httpService.post(body, 'recipes');
  }

  deleteRecipe(body) {
    return this._httpService.delete(body, 'recipes');
  }

  updateRecipe(body) {
    return this._httpService.put(body, 'recipes');
  }
}
