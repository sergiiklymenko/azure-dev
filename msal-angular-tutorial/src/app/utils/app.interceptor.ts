import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {StorageService} from "../storage/storage.service";

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(private storageService: StorageService) {
  }
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.storageService.getData('token');
    console.log(token);
    const headers = request.headers
      .set('Authorization', token ? `Bearer ${token}` : '')
    const req  = request.clone({headers});
    return next.handle(req);
  }
}
