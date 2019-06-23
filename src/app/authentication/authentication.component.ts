import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie';
import { Router } from '@angular/router';

@Component({
    selector: 'app-authentication',
    templateUrl: './authentication.component.html',
    styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
    

    login = {
        email: "",
        password: ""
    }


    constructor(
        private __cookieService: CookieService,
        public router: Router
    ) { }

    ngOnInit() {
        let key = this.__cookieService.get("request_session_auth")
        if (key != undefined || key != null) {
            if(key === "auth_user_true") {
                this.router.navigate(['/perfil-usuario'])
           } else if (key === "auth_company_true") {
                this.router.navigate(['/perfil-empresa'])
           }
        }
    }   

}
