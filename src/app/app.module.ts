import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { ChannelComponent } from './channel/channel.component';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';

import { ChatService } from './shared/chat.service';
import { AuthService } from './shared/auth.service';
import { ApiService } from './shared/api.service';

@NgModule({
  declarations: [
    AppComponent,
    ChannelComponent,
    TestComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ChatService, AuthService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
