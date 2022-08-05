import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListServicosComponent } from './list-servicos.component';

describe('ListServicosComponent', () => {
  let component: ListServicosComponent;
  let fixture: ComponentFixture<ListServicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListServicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
