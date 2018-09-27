import {Injectable} from '@angular/core';

import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {
  private url = 'ws://localhost:5000/?ticket=';
  private socket;

  constructor(private router: Router, private authService: AuthService) {}

  setUsername(username) {
    this.socket.emit('set-username', username);
  }

  sendMessage(message) {
    this.socket.emit('add-message', message);
  }

  getMessages() {
    const observable = new Observable(observer => {
      this.socket = io(this.url + this.authService.getToken());
      this.socket.on('message', (data) => {
        console.log(data);
        observer.next(data);
      });

      this.socket.on('invalid-access', (data) => {
        this.router.navigate(['/login']);
      });

      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }


}
