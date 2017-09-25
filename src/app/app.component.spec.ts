import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
<<<<<<< HEAD
      imports: [
        RouterTestingModule
      ]
=======
      imports: [ RouterTestingModule ]
>>>>>>> 6fcda9478f0bc53ef1a431bf5a0174f1f39cb920
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

<<<<<<< HEAD
=======

>>>>>>> 6fcda9478f0bc53ef1a431bf5a0174f1f39cb920
});
