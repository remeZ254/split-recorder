import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectVideoSourceComponent } from './select-video-source.component';

describe('SelectVideoSourceComponent', () => {
  let component: SelectVideoSourceComponent;
  let fixture: ComponentFixture<SelectVideoSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectVideoSourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectVideoSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
