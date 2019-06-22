import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie';
import { Router } from '@angular/router';

@Component({
    selector: 'app-profile-company',
    templateUrl: './profile-company.component.html',
    styleUrls: ['./profile-company.component.scss']
})
export class ProfileCompanyComponent implements OnInit {

    constructor(
        private __cookieService: CookieService,
        public router: Router
    ) { }

    ngOnInit() {
        let key = this.__cookieService.get("request_session_auth")
        if (key === undefined || key === null) {
            this.router.navigate(['/autenticacao'])
        }
    }

}
