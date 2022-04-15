import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDocumentationComponent } from './angular-documentation.component';

describe('AngularDocumentationComponent', () => {
  let component: AngularDocumentationComponent;
  let fixture: ComponentFixture<AngularDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularDocumentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
