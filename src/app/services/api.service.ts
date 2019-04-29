import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import { Observable, throwError } from 'rxjs';
// import { retry, catchError } from 'rxjs/operators';
// -------------------------------------------------------------------------- //
// import { Clients } from '../services/clients';


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  apiURL = "http://gpa.herokuapp.com/api";
  res = {};

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 

  getData(extURL){
    this.http.get(this.apiURL+extURL).subscribe(data => {
      this.res = data;
      console.log(data);
    });
  }



}
