import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssDocumentationComponent } from './css-documentation.component';

describe('CssDocumentationComponent', () => {
  let component: CssDocumentationComponent;
  let fixture: ComponentFixture<CssDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssDocumentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CssDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
