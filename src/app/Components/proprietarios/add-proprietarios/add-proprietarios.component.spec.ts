import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProprietariosComponent } from './add-proprietarios.component';

describe('AddProprietariosComponent', () => {
  let component: AddProprietariosComponent;
  let fixture: ComponentFixture<AddProprietariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProprietariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProprietariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
