import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVeiculosComponent } from './add-veiculos.component';

describe('AddVeiculosComponent', () => {
  let component: AddVeiculosComponent;
  let fixture: ComponentFixture<AddVeiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVeiculosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVeiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
