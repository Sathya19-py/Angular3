import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {ProgressbarModule} from 'ngx-bootstrap/progressbar';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatMenuModule,
        MatListModule,
        MatTabsModule,
        ProgressbarModule,

    ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
