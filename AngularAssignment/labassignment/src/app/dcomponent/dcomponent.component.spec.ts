import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcomponentComponent } from './dcomponent.component';

describe('DcomponentComponent', () => {
  let component: DcomponentComponent;
  let fixture: ComponentFixture<DcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
