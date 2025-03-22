import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaCategoriasComponent } from './ficha-categorias.component';

describe('FichaCategoriasComponent', () => {
  let component: FichaCategoriasComponent;
  let fixture: ComponentFixture<FichaCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FichaCategoriasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichaCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
