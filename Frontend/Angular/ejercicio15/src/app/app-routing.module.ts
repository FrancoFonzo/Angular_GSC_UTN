import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { InvalidEventGuard } from './invalid-event.guard';

const routes: Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'event/:id', component: EventDetailComponent, canActivate: [InvalidEventGuard] },
  { path: '', redirectTo: '/events', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }