import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackSectionComponent } from './stack-section.component';

describe('StackSectionComponent', () => {
  let component: StackSectionComponent;
  let fixture: ComponentFixture<StackSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StackSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StackSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
