import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private URL = 'https://api-full-conected.onrender.com/apiservices'

  constructor(
    private http: HttpClient) { }

    getTasks(){
      return this.http.get<any>(this.URL + '/tasks');
    }

    getPrivateTasks(){
      return this.http.get<any>(this.URL + '/private-tasks');
    }
}
