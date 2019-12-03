import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseneighborhoodComponent } from './chooseneighborhood.component';

describe('ChooseneighborhoodComponent', () => {
  let component: ChooseneighborhoodComponent;
  let fixture: ComponentFixture<ChooseneighborhoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseneighborhoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseneighborhoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
