import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumListeComponent } from './album-liste.component';
import { AppModule } from '../../../app.module';

describe('AlbumListeComponent', () => {
  let component: AlbumListeComponent;
  let fixture: ComponentFixture<AlbumListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
