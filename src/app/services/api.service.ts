import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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


     postCompany (c) {
          return new Promise((resolve, reject) => {
               this.http.post(this.api + 'company/register/', c, {})
                    .subscribe(res => {
                         console.log(res)
                         resolve(res)
                    })
               })
     } 

     postUser (c) {
          return new Promise((resolve, reject) => {
               this.http.post(this.api + 'users/register/pre-register', c, {})
                    .subscribe(res => {
                         console.log(res)
                         resolve(res)
                    })
               })
     } 

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
