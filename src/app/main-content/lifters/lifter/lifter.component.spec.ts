import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifterComponent } from './lifter.component';

describe('LifterComponent', () => {
  let component: LifterComponent;
  let fixture: ComponentFixture<LifterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
