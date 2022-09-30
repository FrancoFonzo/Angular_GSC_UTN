import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EventsService } from './events.service';

@Injectable({
  providedIn: 'root'
})
export class InvalidEventGuard implements CanActivate {
  constructor(private eventService: EventsService) {
    
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let eventId = Number(route.paramMap.get('id'));
      return !!this.eventService.getOne(eventId);
  }
  
}
