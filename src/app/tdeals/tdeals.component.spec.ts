import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdealsComponent } from './tdeals.component';

describe('TdealsComponent', () => {
  let component: TdealsComponent;
  let fixture: ComponentFixture<TdealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TdealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
