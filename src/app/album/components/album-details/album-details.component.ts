import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../../shared/albums.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  @Input() album;
  @Output() save = new EventEmitter<number>();

  constructor(private activatedRoute: ActivatedRoute, private albumService: AlbumsService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      (map) => {
        const id = +map.get('id');
        this.albumService.getAlbum(id).subscribe(
          album => this.album = album
        );
      }
    )
  }

  nbChanson() {
    return this.album.listeChanson.length;
  }
  getColor() {
    if (this.album.note === 5) {
      return "#64b3f4";
    } else if (this.album.note === 0) {
      return "#e35d5b";
    } else if (this.album.note === 10) {
      return "#11998e";
    } return 'black';
  }

  isValid() {
    if (this.album.note >= 0 && this.album.note <= 10) {
      return true;
    }
  }

  onClick() {
    this.albumService.saveAlbum(this.album).subscribe(
      () => this.router.navigate(['/album']),
      (err) => console.error(err)
    )
    console.log('save', this.album.note);
    this.save.emit(this.album.note);
  }

}
