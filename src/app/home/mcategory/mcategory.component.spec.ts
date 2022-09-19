import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McategoryComponent } from './mcategory.component';

describe('McategoryComponent', () => {
  let component: McategoryComponent;
  let fixture: ComponentFixture<McategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
