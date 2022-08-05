import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProprietariosComponent } from './list-proprietarios.component';

describe('ListProprietariosComponent', () => {
  let component: ListProprietariosComponent;
  let fixture: ComponentFixture<ListProprietariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProprietariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProprietariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
