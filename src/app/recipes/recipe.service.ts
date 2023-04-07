import { EventEmitter } from '@angular/core';
import { Recipe } from "./recipe.model";
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] =[
    new Recipe(
      'Tasty Schnitzel',
      'This is simply a Breakfast',
     'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sibyl_sunitha/Bengali_Style_Sheem_Poshto_Recipe_Flat_Beans_in_Poppy_Seeds_.jpg',
     [
      new Ingredient('Meat',1),
      new Ingredient('French Fries', 20)
     ]),
    new Recipe(
      'Big Fat Burger',
      'This is simply a Lunch',
    'https://i0.wp.com/flavoursofmykitchen.com/wp-content/uploads/2022/04/MG_1060.jpg',
    [
      new Ingredient('Buns', 2),
      new Ingredient('Meat', 2)
    ]),
    new Recipe(
      'Spagitti',
      'This is another a Dinner',
    'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sibyl_sunitha/Bengali_Style_Sheem_Poshto_Recipe_Flat_Beans_in_Poppy_Seeds_.jpg',
    [
      new Ingredient('Spagitti', 1),
      new Ingredient('Ketchup', 1),
      new Ingredient('Cheese', 1)
    ])
  ];

  getRecipes(){
    return this.recipes.slice();
  }

}
