import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Company } from './company';
import { Observable } from 'rxjs';


@Injectable({
     providedIn: 'root'
})

export class ApiService {

     private api = "http://127.0.0.1:8000/";

     constructor(private http: HttpClient) { }

     httpOptions = {
          headers: new HttpHeaders({
               'Content-Type': 'application/json'
          })
     }

     // getCompany (): Observable<Company[]> {
     //      return this.http.get(this.api + 'company?limit=10', {}, {})
     //           .then(r => {
     //                console.log(r)
     //           })
     // }

     // postCompany (c) {
     //      return this.http.post<Company>(this.api + 'company/register/', c, {})
     //           .subscribe(r => {
     //                console.log(r)
     //           })
     // } 

     // deleteCompany (i) {
     //      return this.http.delete(this.api + 'company/' + i)
     //           .subscribe(r => {
     //                console.log(r)
     //           })
     // }

     // postAppointement (a) {
     //      return this.http.post(this.api + 'company/register/appointement', a, {})
     //           .subscribe(r => {
     //                console.log(r)
     //           })
     // }






}
