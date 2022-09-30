import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventsService } from './events.service';

@Injectable({
  providedIn: 'root'
})
export class InvalidEventGuard implements CanActivate, CanDeactivate<EventDetailComponent>{
  constructor(private eventService: EventsService) {
    
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let eventId = Number(route.paramMap.get('id'));
      return !!this.eventService.getOne(eventId);
  }

  canDeactivate(
    component: EventDetailComponent, 
    currentRoute: ActivatedRouteSnapshot, 
    currentState: RouterStateSnapshot, 
    nextState?: RouterStateSnapshot | undefined): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return component.reviewed;
  }
  
}
