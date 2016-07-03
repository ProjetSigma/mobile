import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HomePage} from '../../home';
import {APIService} from '../../shared/services/api-service'


@Component({
    templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {
    private login:any;

    constructor(nav: NavController, api: APIService) {
        if (api.isAuthenticated()) {
            api.buildStore();
            nav.push(HomePage);
        }
        this.login = function(username, password) {
            api.login(username, password).subscribe(
                res => {
                    nav.push(HomePage);
                },
                err => {
                    this.password = '';
                }
            );
        };
    }
}
