import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AlbumsService } from './album/shared/albums.service';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { AppRoutingModule } from './app-routing.module';
import { AlbumModule } from './album/album.module';
registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlbumModule
  ],
  providers: [AlbumsService, {provide:LOCALE_ID,useValue:"fr-FR"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
