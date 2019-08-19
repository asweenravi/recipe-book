import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseURL = 'http://localhost:3000/v0/'
  constructor(private http: HttpClient) { }

  get(endpoint) {
    return this.http.get(this.baseURL+endpoint);
  }
}
