//import { HttpClientModule, HttpHeaders } from '@angular/common/http';
//import { Injectable } from '@angular/core';

//@Injectable({
  //providedIn: 'root'
//})
//export class FormService {
  //constructor(private http: HttpClientModule) { }
//}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Form } from './form';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {

  baseURL: string = "http://localhost:3000/";

  constructor(private http: HttpClient) {
  }

  getPeople(): Observable<Form[]> {
    console.log('getPeople ' + this.baseURL + 'people')
    return this.http.get<Form[]>(this.baseURL + 'people')
  }

  addPerson(person: Form): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(person);
    console.log(body)
    return this.http.post(this.baseURL + 'people', body, { 'headers': headers })
  }

}
