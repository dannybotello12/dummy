import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillapagadaComponent } from './plantillapagada.component';

describe('PlantillapagadaComponent', () => {
  let component: PlantillapagadaComponent;
  let fixture: ComponentFixture<PlantillapagadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantillapagadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantillapagadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
