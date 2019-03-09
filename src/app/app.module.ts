import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsernameComponent } from './username/username.component';
import { FavoriteColorComponentComponent } from './favorite-color-component/favorite-color-component.component';

@NgModule({
  declarations: [
    AppComponent,
    UsernameComponent,
    FavoriteColorComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
