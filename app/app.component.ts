import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-project';
  featureSelect='recipes';
  onNavigate(feature:string){
  	
  		this.featureSelect=feature;
  	
  }
}
