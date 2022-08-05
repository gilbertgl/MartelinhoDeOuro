import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServicosComponent } from './add-servicos.component';

describe('AddServicosComponent', () => {
  let component: AddServicosComponent;
  let fixture: ComponentFixture<AddServicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddServicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
