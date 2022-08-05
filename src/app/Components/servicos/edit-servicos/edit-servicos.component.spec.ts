import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditServicosComponent } from './edit-servicos.component';

describe('EditServicosComponent', () => {
  let component: EditServicosComponent;
  let fixture: ComponentFixture<EditServicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditServicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
