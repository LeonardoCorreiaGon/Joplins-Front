import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { CookieService } from 'angular2-cookie/core';

@Component({
     selector: 'app-create-account',
     templateUrl: './create-account.component.html',
     styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

     errors = {};

     animate_a = 'animated bounceInRight'
     animate_b = 'hide'
     animate_c = 'hide'

     form_user = {
          name: "",
          last_name: "",
          email: "",
          password: "",
          birth_date: ""
     }

     form_company = {
          name: "",
          responsible_account: "",
          cnpj_or_mei: "",
          area: "",
          company_employees: "",
          description: "",
          company_site: "",
          address: "",
          tel: ""
     }

     constructor(
          private api: ApiService,
          public router: Router,
          private __cookieService: CookieService
     ) { }

     ngOnInit() {

          let y = this.__cookieService.get("request_session_auth")
          
          if(y === "auth_user_true") {
               // user profile
               this.router.navigate(['/'])
          } else if (y === "auth_company_true") {
               // company profile
               this.router.navigate(['/'])
          }

     }

     formGo(a) {

          switch (a) {

               case 1:
                    this.animate_a = 'animated bounceOutRight'
                    setTimeout(() => {
                         this.animate_a = 'hide'
                         this.animate_b = 'animated fadeInUp'
                    }, 350)
                    break

               case 2:
                    this.animate_a = 'animated bounceOutRight'
                    setTimeout(() => {
                         this.animate_a = 'hide'
                         this.animate_c = 'animated fadeInUp'
                    }, 350)
                    break

               case 3:
                    this.animate_b = 'hide'
                    this.animate_c = 'hide'
                    this.animate_a = 'animated bounceInRight'
                    break

          }

     }

     registerCompany() {

          this.api.postUser(this.form_company)

               .then(res => {

                    if(res['error'] == true) {
                         this.errors = res
                         console.log(this.errors)
                    } else {
                         this.__cookieService.put("request_session_auth", "auth_company_true")
                         // company profile
                         this.router.navigate(['/'])
                    }  

               })


     }

     registerUser() {

          this.api.postUser(this.form_user)

               .then(res => {
                    
                    if(res['error'] == true) {
                         this.errors = res
                         console.log(this.errors)
                    } else {
                         this.__cookieService.put("request_session_auth", "auth_user_true")
                         // user profile
                         this.router.navigate(['/'])
                    }  

               })

     }




}
