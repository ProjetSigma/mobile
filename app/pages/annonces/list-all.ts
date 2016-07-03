import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Sigma} from '../../app';
import {AuthService} from '../../shared/services/auth-service'


@Component({
    templateUrl: 'build/pages/annonces/list-all.html',
})
export class AnnoncesListAll {
    private logout: any;
    
    constructor(nav: NavController, auth: AuthService) {
        this.logout = function() {
            auth.logout();
        }
    }
}
