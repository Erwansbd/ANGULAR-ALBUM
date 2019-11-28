import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AlbumListeComponent } from './album/pages/album-liste/album-liste.component';
import { AlbumDetailsComponent } from './album/components/album-details/album-details.component';
import { AuthGuardService } from './auth-guard.service';
import { NewAlbumComponent } from './album/pages/new-album/new-album.component';
import { LoginComponent } from './album/pages/login/login.component';

const routes: Routes = [
  
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'album', component: AlbumListeComponent, canActivate: [ AuthGuardService ]
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

