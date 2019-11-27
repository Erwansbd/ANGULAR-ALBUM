import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumDetailsComponent } from './album-details.component';
import { AppModule } from '../../../app.module';
import { Album } from '../../shared/album';
import { Chanson } from '../../shared/chanson';
import { Genre } from '../../shared/enum';

describe('AlbumDetailsComponent', () => {
  let component: AlbumDetailsComponent;
  let fixture: ComponentFixture<AlbumDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumDetailsComponent);
    component = fixture.componentInstance;
    component.album = new Album({ nom: "When we fall Asleep, Where Do We Go?", auteur: "Billie Eilish", note: 3, listeChanson: [new Chanson({ titre: "Bad Guy", duree: 3.14 }), new Chanson({ titre: "xanny", duree: 4.04 }), new Chanson({ titre: "you should see me in a crown", duree: 3.01 })], genre: Genre.POP });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return #e35d5b', () => {
    component.album.note = 0;
    const expectedColor = component.getColor();
    expect(expectedColor).toBe('#e35d5b');
  })

  it('should return #64b3f4', () => {
    component.album.note = 5;
    const expectedColor = component.getColor();
    expect(expectedColor).toBe('#64b3f4');
  })

  it('should update note',()=> {
    const select:HTMLSelectElement = fixture.nativeElement.querySelector('select');
    select.value = '0';
    select.dispatchEvent(new Event('select'));
    expect(component.album.note).toBe(5);
  })

  it('should display name',() => {
    const element:HTMLElement = fixture.nativeElement.querySelector('#informations');
    expect(element.textContent).toBe("L'Album "+ component.album.nom+ " de "+ component.album.auteur)
  })
});
