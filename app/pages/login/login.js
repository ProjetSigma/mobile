import {Page} from 'ionic/ionic';
import {NavController} from 'ionic/ionic';
import {HomePage} from '../../home';
import {AuthService} from '../../services/auth-service'


@Page({
    templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {
    constructor(nav: NavController, auth: AuthService) {
        if (auth.isAuthenticated()) {
            nav.push(HomePage);
        }
        this.login = function(username, password) {
            auth.authentificate(username, password).subscribe(
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
