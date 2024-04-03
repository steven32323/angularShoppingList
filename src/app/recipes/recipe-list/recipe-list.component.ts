import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  currentSelection: string;

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://cdn.stocksnap.io/img-thumbs/960w/food-recipe_G8QICMKLUV.jpg'
    ),
    new Recipe(
      'Skewers',
      'Category : vegetarian',
      'https://static01.nyt.com/images/2021/06/01/dining/11lightveg-roundup-promo/11lightveg-roundup-8-jumbo-v2.jpg?quality=75&auto=webp'
    ),

    new Recipe(
      'Lasagna',
      'Category : Beef Pasta',
      'https://haihuin2.com/wp-content/uploads/2020/10/Cea-mai-buna-reteta-de-paste.-Cum-se-prepara-lasagna-bolognese-1024x576.jpg'
    ),

    new Recipe(
      'Carbonara',
      'Category : Pasta',
      'https://jamilacuisine.ro/wp-content/uploads/2014/06/Spaghete-carbonara.jpg'
    ),

    new Recipe(
      'Hamburger',
      'Category : Burgers',
      'https://www.lalena.ro/images/uploaded/1920x_Hamburgeri-de-casa-933.jpg'
    ),
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

  constructor() {}

  ngOnInit() {}
}
