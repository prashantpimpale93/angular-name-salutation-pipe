import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NameSalutationPipe } from './name-salutation.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NameSalutationPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [NameSalutationPipe],
  bootstrap: [AppComponent],
})
export class AppModule { }
