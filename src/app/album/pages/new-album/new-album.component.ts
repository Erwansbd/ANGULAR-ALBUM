import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlbumsService } from '../../shared/albums.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-album',
  templateUrl: './new-album.component.html',
  styleUrls: ['./new-album.component.css']
})
export class NewAlbumComponent implements OnInit {

  constructor(private albumService: AlbumsService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value)

    this.albumService.saveAlbum(form.value).subscribe(
      () => this.router.navigate(['/album'])
    );
  }

}
