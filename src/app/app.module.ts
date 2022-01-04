import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainNavComponent} from './main-nav/main-nav.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BeltListComponent} from './belts/belt-list/belt-list.component';
import { BeltThumbailComponent } from './belts/belt-thumbail/belt-thumbail.component';
import {MatCardModule} from '@angular/material/card';
import { BeltColorDirective } from './belts/belt-thumbail/belt-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    BeltListComponent,
    BeltThumbailComponent,
    BeltColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
