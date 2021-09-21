import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiftersComponent } from './lifters.component';

describe('LiftersComponent', () => {
  let component: LiftersComponent;
  let fixture: ComponentFixture<LiftersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiftersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiftersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
