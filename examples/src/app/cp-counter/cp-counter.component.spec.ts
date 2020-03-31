import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpCounterComponent } from './cp-counter.component';

describe('CpCounterComponent', () => {
  let component: CpCounterComponent;
  let fixture: ComponentFixture<CpCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
