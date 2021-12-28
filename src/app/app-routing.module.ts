import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BeltListComponent} from './belts/belt-list/belt-list.component';
import {BeltListResolver} from './belts/belt-list/belt-list-resolver.service';

const routes: Routes = [
  {path: '', component: BeltListComponent, resolve: {belts: BeltListResolver}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
