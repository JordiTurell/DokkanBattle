import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackListPersonajesComponent } from './back-list-personajes.component';

describe('BackListPersonajesComponent', () => {
  let component: BackListPersonajesComponent;
  let fixture: ComponentFixture<BackListPersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackListPersonajesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackListPersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
