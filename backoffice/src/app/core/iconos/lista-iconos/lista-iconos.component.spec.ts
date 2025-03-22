import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaIconosComponent } from './lista-iconos.component';

describe('ListaIconosComponent', () => {
  let component: ListaIconosComponent;
  let fixture: ComponentFixture<ListaIconosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaIconosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaIconosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
