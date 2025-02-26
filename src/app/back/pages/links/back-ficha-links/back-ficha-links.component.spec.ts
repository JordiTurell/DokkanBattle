import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackFichaLinksComponent } from './back-ficha-links.component';

describe('BackFichaLinksComponent', () => {
  let component: BackFichaLinksComponent;
  let fixture: ComponentFixture<BackFichaLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackFichaLinksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackFichaLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
