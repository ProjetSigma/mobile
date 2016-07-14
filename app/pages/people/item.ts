import {Component, Input} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {APIService} from '../../shared/services/api-service';
import {User} from '../../shared/resources/user';
import {PeoplePersonPage} from './profile';

@Component({
    selector: 'user-item',
    templateUrl: 'build/pages/people/item.html',
})
export class UserItem {
    private nav: any;
    @Input('user') user: User;

    constructor(nav: NavController, public api: APIService) {
      this.nav = nav;
    }

    showUser(user) {
        this.nav.push(PeoplePersonPage, {user: user});
    }
}
