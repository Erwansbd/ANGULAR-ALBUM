import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ALBUM, Album } from './album';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  
  album: Album;
  private albums = [
    this.album = ALBUM[0],
    this.album = ALBUM[1],
    this.album = ALBUM[2]
  ]

  private url = 'albums';
  
  constructor(private httpclient: HttpClient) { }
  
  getAlbums(): Observable<Album[]> {
    return this.httpclient.get<Album[]>(this.url + '/all'); // => GET localhost:4200/api/album
  }
  
  getAlbum(id): Observable<Album> {
    return this.httpclient.get<Album>(`${this.url}/${id}`); // => GET localhost:4200/api/album/1  || ((this.url + '/' + id)) => autre syntaxe pour l'url
  }

  saveAlbum(album: Album): Observable<any> {
    console.log('save', album)
    return this.httpclient.post(this.url,album); // => POST localhost:4200/api/album
  }
}
