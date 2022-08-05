import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list.component';
import { StarComponent } from './shared/components/star-component/star.component';
import { ConvertToSpaces } from './shared/Pipes/convert-to-spaces.pipes';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpaces,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
