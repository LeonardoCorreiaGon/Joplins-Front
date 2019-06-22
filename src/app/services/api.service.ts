import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { resolve } from 'url';

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

     // loginUser (c) {
     //      return new Promise((resolve, reject) => {
     //           this.http.get(this.api + 'users/', {})
     //                .subscribe(res => {
     //                     console.log(res)
     //                     resolve(res)
     //                })
     //      })
     // }

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

     // postAppointement (c) {
     //      return new Promise((resolve, reject) => {
     //           this.http.post(this.api + 'company/register/appointement/', c, {})
     //                .subscribe(res => {
     //                     console.log(res)
     //                     resolve(res)
     //                })
     //      })
     // }

     // deleteCompany (i) {
     //      return this.http.delete(this.api + 'company/' + i)
     //           .subscribe(r => {
     //                console.log(r)
     //           })
     // }






}
