import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
	ingredients:Ingredient[]=[
		new Ingredient('apple',4),
		new Ingredient('mango',5),
	];
  OnIngrAdd(ingredient:Ingredient){
    this.ingredients.push(ingredient);
  }
  constructor() { }

  ngOnInit() {
  }

}
