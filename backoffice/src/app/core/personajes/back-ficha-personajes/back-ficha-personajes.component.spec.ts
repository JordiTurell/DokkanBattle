import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackFichaPersonajesComponent } from './back-ficha-personajes.component';

describe('BackFichaPersonajesComponent', () => {
  let component: BackFichaPersonajesComponent;
  let fixture: ComponentFixture<BackFichaPersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackFichaPersonajesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackFichaPersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
