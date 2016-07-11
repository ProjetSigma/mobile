import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Sigma} from '../../app';
import {APIService} from '../../shared/services/api-service';


@Component({
    templateUrl: 'build/pages/annonces/list-all.html',
})
export class AnnoncesListAll {
    constructor(public api:APIService) {
    }

    logout() {
        return this.api.logout();
    }
}
