import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackLinkDescripcionComponent } from './back-link-descripcion.component';

describe('BackLinkDescripcionComponent', () => {
  let component: BackLinkDescripcionComponent;
  let fixture: ComponentFixture<BackLinkDescripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackLinkDescripcionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackLinkDescripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
