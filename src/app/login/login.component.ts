import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username;
  password;
  constructor(private router: Router, private httpClient: HttpClient, private auth: AuthService) { }

  ngOnInit() {}

  login() {
    const httpOptions = {
      params: new HttpParams().set('username', this.username).set('password', this.password)
    };

    this.httpClient.post('http://127.0.0.1:5000/auth/login',
      {}, httpOptions)
      .subscribe(
        data => {
          console.log(data);
          this.auth.setToken(data['token']);
          this.router.navigate(['/channels']);
        },
        error => {
          console.log('Error', error);
        }
      );
  }

}
