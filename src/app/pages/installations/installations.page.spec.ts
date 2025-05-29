import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InstallationsPage } from './installations.page';

describe('InstallationsPage', () => {
  let component: InstallationsPage;
  let fixture: ComponentFixture<InstallationsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
