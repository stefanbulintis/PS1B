import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimFactorizationComponent } from './prim-factorization.component';

describe('PrimFactorizationComponent', () => {
  let component: PrimFactorizationComponent;
  let fixture: ComponentFixture<PrimFactorizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimFactorizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimFactorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
