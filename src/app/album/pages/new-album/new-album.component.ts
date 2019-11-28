import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { AlbumsService } from '../../shared/albums.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-album',
  templateUrl: './new-album.component.html',
  styleUrls: ['./new-album.component.css']
})
export class NewAlbumComponent implements OnInit {
  form: FormGroup;

  constructor(private albumService: AlbumsService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      'name': new FormControl('new album',[Validators.required]),
      'auteur': new FormControl('auteur',[Validators.required]),
      'note': new FormControl([Validators.required]),
      'songs': new FormArray([
        new FormGroup({
          'name': new FormControl('',[Validators.required]),
          'length': new FormControl('',[Validators.required, Validators.min(0)])
        })
      ])
    })
  }

  onSubmit() {
    console.log(this.form.value);
  }

  get songs(): FormArray {
    return this.form.get('songs') as FormArray;
  }

  addSong() {
    this.songs.push(
      new FormGroup({
        'name': new FormControl('',[Validators.required]),
        'length': new FormControl('',[Validators.required, Validators.min(0)])
      })
    );
  }
  /* onSubmit(form: NgForm) {
    console.log(form.value)

    this.albumService.saveAlbum(form.value).subscribe(
      () => this.router.navigate(['/album'])
    );
  } */

}
