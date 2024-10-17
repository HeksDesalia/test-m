import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldContainerComponent } from './form-field-container.component';

describe('FormFieldContainerComponent', () => {
  let component: FormFieldContainerComponent;
  let fixture: ComponentFixture<FormFieldContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFieldContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormFieldContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
