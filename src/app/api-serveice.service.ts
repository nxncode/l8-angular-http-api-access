import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable()
export class ApiServeiceService {
  API_SERVER = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private http: HttpClient) { }

  getAPIDataService(){
    return this.http.get(this.API_SERVER);
  }
}