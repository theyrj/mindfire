import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Post.PersonComponent } from './post.person.component';

describe('Post.PersonComponent', () => {
  let component: Post.PersonComponent;
  let fixture: ComponentFixture<Post.PersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Post.PersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Post.PersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
