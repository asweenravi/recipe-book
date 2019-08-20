import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseURL = 'http://localhost:3000/v0/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  get(endpoint) {
    return this.http.get(this.baseURL+endpoint);
  }

  post(body, endpoint) {
    return this.http.post(this.baseURL+endpoint, body, this.httpOptions);
  }

  put(body, endpoint) {
    return this.http.put(this.baseURL+endpoint, body, this.httpOptions);
  }

  delete(body,endpoint) {
    return this.http.delete(this.baseURL+endpoint, body);
  }
}
