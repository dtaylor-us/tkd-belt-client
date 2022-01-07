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
import {MatListModule} from '@angular/material/list';
import { BeltListDetailsComponent } from './belts/belt-list/belt-list-details/belt-list-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    BeltListComponent,
    BeltThumbailComponent,
    BeltColorDirective,
    BeltListDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
