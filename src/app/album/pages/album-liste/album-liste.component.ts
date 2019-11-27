import { Component, OnInit } from '@angular/core';
import { LoggerServiceService } from '../../../logger-service.service';
import { AlbumsService } from '../../shared/albums.service';
import { Album, ALBUM } from '../../shared/album';

@Component({
  selector: 'app-album-liste',
  templateUrl: './album-liste.component.html',
  styleUrls: ['./album-liste.component.css']
})
export class AlbumListeComponent implements OnInit {

  albums: Album[];
  album: Album;
  selectedAlbum: Album;

  constructor(private loggerService: LoggerServiceService, private albumService: AlbumsService) { }

  ngOnInit() {
    this.albumService.getAlbums().subscribe(
      (albums) => {
        this.albums = albums;
      }
    );
  }

  selectAlbum(album) {
    this.selectedAlbum = album;
    this.loggerService.logDebug(`album selected ${this.selectedAlbum.nom}`);
  }

  unselect() {
    delete this.selectedAlbum;
  }

}
