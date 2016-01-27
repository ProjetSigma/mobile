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
        this.allUsers = [];
        this.displayedUsers = [];
        this.getUsers();
        this.searchUser = '';
    }

    showUser(user) {
        this.nav.push(PeoplePersonPage, {user: user});
    }

    getUsers() {
        this.user_service.getUsers()
            .subscribe(res => {
                this.allUsers = res.json();
                this.displayedUsers = this.allUsers;
            });
    }

    updateUsers(searchBar) {
        this.displayedUsers = this.allUsers;

        var q = searchBar.value;
        if (q.trim() == '') {
            return;
        }
        q = q.toLowerCase();

        this.displayedUsers = this.allUsers.filter((user) => {
            if (user.firstname.toLowerCase().indexOf(q) > -1 || user.lastname.toLowerCase().indexOf(q) > -1) {
                return true;
            }
            return false;
        });
    }
}
