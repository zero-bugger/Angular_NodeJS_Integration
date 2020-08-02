import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpclientService {
  private url = "http://localhost:3000/api/home"
  constructor(private http:HttpClient) { }


  getData(){
    return this.http.get<any>(this.url)

  }
}
