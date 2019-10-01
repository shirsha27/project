import { Component, OnInit, ViewChild, Output, ElementRef, EventEmitter} from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model';
@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
	ingrName='';
	ingrAmount;
  @ViewChild('name') ingName: ElementRef;
  @ViewChild('amount') ingAmount: ElementRef;
  @Output() IngAdded=new EventEmitter<{name:string,amount:number}>();
  onIngAdded(){
  	this.ingrName=this.ingName.nativeElement.value;
  	this.ingrAmount=this.ingAmount.nativeElement.value;
  	const newIngre=new Ingredient(this.ingrName,this.ingrAmount); 
  	this.IngAdded.emit(newIngre);

  }
  constructor() { }

  ngOnInit() {
  }

}
