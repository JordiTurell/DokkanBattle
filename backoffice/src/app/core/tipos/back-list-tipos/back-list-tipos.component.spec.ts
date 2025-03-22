import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackListTiposComponent } from './back-list-tipos.component';

describe('BackListTiposComponent', () => {
  let component: BackListTiposComponent;
  let fixture: ComponentFixture<BackListTiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackListTiposComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackListTiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
