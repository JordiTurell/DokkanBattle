import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaIconosComponent } from './ficha-iconos.component';

describe('FichaIconosComponent', () => {
  let component: FichaIconosComponent;
  let fixture: ComponentFixture<FichaIconosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FichaIconosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichaIconosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
