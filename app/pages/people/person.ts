import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {APIService} from '../../shared/services/api-service';
import {User} from '../../shared/resources/user';


@Component({
    templateUrl: 'build/pages/people/person.html',
    // providers: [UserService],
})
export class PeoplePersonPage {
    public user = new User();

    constructor(params: NavParams, public api: APIService) {
        this.user = params.get('user');
        this.getUser(this.user.id);
    }

    getUser(id) {
        this.api.store.find('user', id).then(res => this.user = res);
    }
}
