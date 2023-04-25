import { Ingredient } from './../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { Recipe } from "./recipe.model";
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';


@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

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

  constructor(private shopListService: ShoppingListService){

  }

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngToShopList(ingrediens: Ingredient[]){
    this.shopListService.addIngredients(ingrediens);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice())
  }

}
