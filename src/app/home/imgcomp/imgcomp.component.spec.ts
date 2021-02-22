import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgcompComponent } from './imgcomp.component';

describe('ImgcompComponent', () => {
  let component: ImgcompComponent;
  let fixture: ComponentFixture<ImgcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
