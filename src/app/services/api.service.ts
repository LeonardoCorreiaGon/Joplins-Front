import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

// -------------------------------------------------------------------------- //

import { Clients } from '../services/clients';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  apiURL = "http://gpa.herokuapp.com/api/";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 

  // 
  getClients(): Observable<Clients> {
    return this.http.get<Clients>(this.apiURL + '/employees')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  private handleError(error: any): Promise<any> {
    console.error('error ==> ', error); // for demo purposes only
    return Promise.reject(error.message || error);
 }

}
