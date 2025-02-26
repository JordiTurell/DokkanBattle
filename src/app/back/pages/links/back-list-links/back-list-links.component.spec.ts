import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackListLinksComponent } from './back-list-links.component';

describe('BackListLinksComponent', () => {
  let component: BackListLinksComponent;
  let fixture: ComponentFixture<BackListLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackListLinksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackListLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
