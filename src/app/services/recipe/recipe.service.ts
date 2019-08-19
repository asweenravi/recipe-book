import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(private _httpService: HttpService) { }

  getRecipe() {
    return this._httpService.get('recipes');
  }
}
