import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLoadComponent } from './menu-load.component';

describe('MenuLoadComponent', () => {
  let component: MenuLoadComponent;
  let fixture: ComponentFixture<MenuLoadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuLoadComponent]
    });
    fixture = TestBed.createComponent(MenuLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
