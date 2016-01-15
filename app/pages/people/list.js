import {Page} from 'ionic/ionic';
import {UserService} from '../../services/users/user-service';


@Page({
    templateUrl: 'build/pages/people/list.html',
    providers: [UserService],
})
export class PeopleList {
    constructor(user_service: UserService) {
        this.user_service = user_service;
        this.users = [];
        this.getUsers();
    }

    getUsers() {
        this.user_service.getUsers()
            .subscribe(res => this.users = res.json());
    }
}
