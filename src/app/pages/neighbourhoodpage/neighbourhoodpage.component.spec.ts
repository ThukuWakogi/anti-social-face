import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeighbourhoodpageComponent } from './neighbourhoodpage.component';

describe('NeighbourhoodpageComponent', () => {
  let component: NeighbourhoodpageComponent;
  let fixture: ComponentFixture<NeighbourhoodpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeighbourhoodpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeighbourhoodpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
