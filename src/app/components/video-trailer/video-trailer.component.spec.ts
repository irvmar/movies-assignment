import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTrailerComponent } from './video-trailer.component';

describe('VideoTrailerComponent', () => {
  let component: VideoTrailerComponent;
  let fixture: ComponentFixture<VideoTrailerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoTrailerComponent]
    });
    fixture = TestBed.createComponent(VideoTrailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
