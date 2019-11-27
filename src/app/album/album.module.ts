import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './pages/album/album.component';
import { AlbumDetailsComponent } from './components/album-details/album-details.component';
import { AlbumListeComponent } from './pages/album-liste/album-liste.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NewAlbumComponent } from './pages/new-album/new-album.component';



@NgModule({
  declarations: [
    AlbumComponent,
    AlbumDetailsComponent,
    AlbumListeComponent,
    NewAlbumComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ]
})
export class AlbumModule { }
