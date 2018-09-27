import { Component } from '@angular/core';
import {ChatService} from './shared/chat.service';
import {AuthService} from './shared/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chat App';

  constructor(private chatService: ChatService, private auth: AuthService) {}

  isLoggedIn() {
    return this.auth.isLoggedIn();
  }

  logOut() {
    this.auth.logout();
  }
}
