import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notification = {
    title: '',
    message: ''
  };

  private subject = new Subject<any>();

  constructor() { }

  setNotification(title, message) {
    this.subject.next(
      this.notification = {
        title: title,
        message: message
      }
    );
  }

  getNotification(): Observable<any> {
    return this.subject.asObservable();
  }
}