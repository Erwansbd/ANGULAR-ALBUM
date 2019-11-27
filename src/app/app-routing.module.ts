import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AlbumListeComponent } from './album/pages/album-liste/album-liste.component';
import { AlbumDetailsComponent } from './album/components/album-details/album-details.component';
import { AuthGuardService } from './auth-guard.service';
import { NewAlbumComponent } from './album/pages/new-album/new-album.component';

const routes: Routes = [
  {
    path: 'album', component: AlbumListeComponent
  },
  {
    path: 'album-details/:id', component: AlbumDetailsComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'new-album', component: NewAlbumComponent, canActivate: [AuthGuardService]
  },
  {
    path: '**', redirectTo: 'album'
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

