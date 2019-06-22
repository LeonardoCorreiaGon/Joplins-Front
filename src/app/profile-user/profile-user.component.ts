import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie';
import { Router } from '@angular/router';

@Component({
    selector: 'app-profile-user',
    templateUrl: './profile-user.component.html',
    styleUrls: ['./profile-user.component.scss']
})
export class ProfileUserComponent implements OnInit {

    data_user = {}

    constructor(
        private __cookieService: CookieService,
        public router: Router
    ) { }

    ngOnInit() {
        let key = this.__cookieService.get("request_session_auth")
        if (key === undefined || key === null) {
            this.router.navigate(['/autenticacao'])
        } else {
            this.data_user = key
        }
    }

}
