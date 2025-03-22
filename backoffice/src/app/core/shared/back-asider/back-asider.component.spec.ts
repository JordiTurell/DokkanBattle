import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackAsiderComponent } from './back-asider.component';

describe('BackAsiderComponent', () => {
  let component: BackAsiderComponent;
  let fixture: ComponentFixture<BackAsiderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackAsiderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackAsiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
