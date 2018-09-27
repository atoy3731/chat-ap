import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  getRequestOptions(headers?: object, params?: object) {
    const requestOptions = {
      params: new HttpParams(),
      headers: new HttpHeaders()
    };

    if (params) {
      requestOptions.params = Object.getOwnPropertyNames(params)
        .reduce((p, key) => p.set(key, params[key]), new HttpParams());
    }

    console.log(requestOptions.params);

    if (headers) {
      headers['Content-Type'] = 'application/json';
    } else {
      headers = {'Content-Type': 'application/json'};
    }

    requestOptions.headers = Object.getOwnPropertyNames(headers)
      .reduce((p, key) => p.set(key, headers[key]), new HttpHeaders());

    return requestOptions;

  }

  get(url: string, params?: object, headers?: object): Observable<any> {
    url = `http://localhost:5000/${url}`;
    const requestOptions = this.getRequestOptions(headers, params);
    return this.http.get<any>(url, requestOptions);
  }

  post(url: string, body: object, params?: object, headers?: object) {
    url = `http://localhost:5000/${url}`;
    console.log(url);
    console.log(params);
    console.log(headers);
    const requestOptions = this.getRequestOptions(headers, params);
    return this.http.post<object>(url, body, requestOptions);
  }

  put(url: string, body: object, params?: object, headers?: object) {
    url = `http://localhost:5000/${url}`;
    const requestOptions = this.getRequestOptions();
    return this.http.put<object>(url, body, requestOptions);
  }

  delete(url: string, params?: object, headers?: object) {
    url = `http://localhost:5000/${url}`;
    const requestOptions = this.getRequestOptions();
    return this.http.delete<object>(url, requestOptions);
  }



}

