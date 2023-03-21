import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedLabelComponent } from './shared-label.component';

describe('SharedLabelComponent', () => {
  let component: SharedLabelComponent;
  let fixture: ComponentFixture<SharedLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
