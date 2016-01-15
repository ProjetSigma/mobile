import {Page} from 'ionic/ionic';
import {UserService} from '../../services/users/user-service';
import {NavController} from 'ionic/ionic';
import {PeoplePersonPage} from './person';


@Page({
    templateUrl: 'build/pages/people/list.html',
    providers: [UserService],
})
export class PeopleList {
    constructor(nav: NavController, user_service: UserService) {
        this.user_service = user_service;
        this.nav = nav;
        this.users = [];
        this.getUsers();
    }

    showUser(user) {
        this.nav.push(PeoplePersonPage, {user: user});
    }

    getUsers() {
        this.user_service.getUsers()
            .subscribe(res => this.users = res.json());
    }
}
