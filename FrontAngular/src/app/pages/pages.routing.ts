import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'teste',
    component: PagesComponent,
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class PagesRoutingModule { }
