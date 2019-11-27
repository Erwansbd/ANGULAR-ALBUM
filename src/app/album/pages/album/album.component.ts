import { Component, OnInit } from '@angular/core';
import { Album, ALBUM } from '../../shared/album';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

album:Album;

  constructor() { }

  ngOnInit() {
    this.album = ALBUM[0];
  }

  onSave(value) {
    console.log('save done', value);
  }

}
