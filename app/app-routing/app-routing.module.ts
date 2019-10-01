import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from '.././recipes/recipes.component';
import { ShoppingListComponent } from '.././shopping-list/shopping-list.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes:Routes=[
  {path:"", component:RecipesComponent},
  {path:"recipes", component:RecipesComponent},
  {path:"shopping-list", component:ShoppingListComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
