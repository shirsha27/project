import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDeailComponent } from './recipe-deail.component';

describe('RecipeDeailComponent', () => {
  let component: RecipeDeailComponent;
  let fixture: ComponentFixture<RecipeDeailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeDeailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDeailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
