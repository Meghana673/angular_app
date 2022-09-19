import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WcategoryComponent } from './wcategory.component';

describe('WcategoryComponent', () => {
  let component: WcategoryComponent;
  let fixture: ComponentFixture<WcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
