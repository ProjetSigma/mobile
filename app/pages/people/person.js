import {Page} from 'ionic/ionic';
import {UserService} from '../../services/users/user-service';
import {NavParams} from 'ionic/ionic';


@Page({
    templateUrl: 'build/pages/people/person.html',
    providers: [UserService],
})
export class PeoplePersonPage {
    constructor(params: NavParams, user_service: UserService) {
        this.user_service = user_service;
        this.user = params.get('user');
        this.getUser(this.user.id);
    }

    getUser(id: string) {
        this.user_service.getUser(id)
            .subscribe(res => this.user = res.json());
    }
}
