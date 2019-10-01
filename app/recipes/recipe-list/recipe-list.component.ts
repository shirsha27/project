import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	
	@Output() recipeSingle=new EventEmitter<recipe>();
	recipes:recipe[]=[
		new recipe('test recipe1','this is for test','https://image.flaticon.com/icons/svg/259/259171.svg'),
		new recipe('test recipe2','this is for test','https://image.flaticon.com/icons/svg/259/259171.svg'),
		new recipe('test recipe3','this is for test','https://image.flaticon.com/icons/svg/259/259171.svg'),
		new recipe('test recipe4','this is for test','https://image.flaticon.com/icons/svg/259/259171.svg')
	];
  constructor() { }

  ngOnInit() {
  }
  onSingleRecipe(recipeItem:recipe){
  	this.recipeSingle.emit(recipeItem);
  }

}
