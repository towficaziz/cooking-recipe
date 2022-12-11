import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] =[
    new Recipe('A Test Recipe', 'This is simply a test',
    'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sibyl_sunitha/Bengali_Style_Sheem_Poshto_Recipe_Flat_Beans_in_Poppy_Seeds_.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test',
    'https://i0.wp.com/flavoursofmykitchen.com/wp-content/uploads/2022/04/MG_1060.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
