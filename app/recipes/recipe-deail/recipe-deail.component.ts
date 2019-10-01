import { Component, OnInit, Input } from '@angular/core';
import {recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-deail',
  templateUrl: './recipe-deail.component.html',
  styleUrls: ['./recipe-deail.component.css']
})
export class RecipeDeailComponent implements OnInit {
  @Input() recipeItem:recipe;
  constructor() { }

  ngOnInit() {
  }

}
