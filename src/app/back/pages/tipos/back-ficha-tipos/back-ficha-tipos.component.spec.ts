import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackFichaTiposComponent } from './back-ficha-tipos.component';

describe('BackFichaTiposComponent', () => {
  let component: BackFichaTiposComponent;
  let fixture: ComponentFixture<BackFichaTiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackFichaTiposComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackFichaTiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
