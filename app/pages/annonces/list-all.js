import {Page} from 'ionic/ionic';
import {NavController} from 'ionic/ionic';
import {Sigma} from '../../app';
import {AuthService} from '../../services/auth-service'


@Page({
    templateUrl: 'build/pages/annonces/list-all.html',
})
export class AnnoncesListAll {
    constructor(nav: NavController, auth: AuthService) {
        this.logout = function() {
            auth.logout();
            window.location='/';
        }
    }
}
