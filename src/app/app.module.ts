import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { AlbumsService } from './album/shared/albums.service';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { AppRoutingModule } from './app-routing.module';
import { AlbumModule } from './album/album.module';
import { LoginComponent } from './album/pages/login/login.component';
import { FormsModule } from '@angular/forms';
registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlbumModule,
    FormsModule

  ],
  providers: [AlbumsService, {provide:LOCALE_ID,useValue:"fr-FR"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
