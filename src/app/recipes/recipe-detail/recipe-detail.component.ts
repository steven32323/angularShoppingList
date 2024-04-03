import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent {
  @Input() selectedRecipe: Recipe;
  defaultRecipe: Recipe = {
    name: 'Recipe Name',
    description: 'Please select a recipe from the list',
    imagePath: '',
  };

  get currentRecipe() {
    return this.selectedRecipe || this.defaultRecipe;
  }
}
