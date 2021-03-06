import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextImageBlockComponent } from './text-image-block.component';

describe('TextImageBlockComponent', () => {
  let component: TextImageBlockComponent;
  let fixture: ComponentFixture<TextImageBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextImageBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextImageBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
