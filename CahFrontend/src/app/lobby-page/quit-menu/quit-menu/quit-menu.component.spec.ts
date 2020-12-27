import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuitMenuComponent } from './quit-menu.component';

describe('QuitMenuComponent', () => {
  let component: QuitMenuComponent;
  let fixture: ComponentFixture<QuitMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuitMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuitMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
