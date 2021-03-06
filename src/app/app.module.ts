import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BookComponent} from './book/book.component';
import { BookService } from './book/book.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule
  ],
  /*
   * Tell Angular that our provider is BookService.
   */
  providers: [ BookService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
