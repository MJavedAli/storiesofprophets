import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProphetsComponent } from './prophets.component';

describe('ProphetsComponent', () => {
  let component: ProphetsComponent;
  let fixture: ComponentFixture<ProphetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProphetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProphetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
