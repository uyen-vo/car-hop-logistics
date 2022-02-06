import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [{
  path: '',
  component: LandingComponent,
},
{
  path: 'book',
  component: BookComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
