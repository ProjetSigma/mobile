import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {APIService} from '../../shared/services/api-service';
import {User} from '../../shared/resources/user';
import {UserItem} from './item';

@Component({
    templateUrl: 'build/pages/people/directory.html',
    directives: [UserItem],
    // providers: [UserService],
})
export class PeopleList {
    private allUsers: User[] = [];
    private displayedUsers: User[] = [];
    private searchUser: string = '';
    private nav: any;

    getUsers() {
        this.api.store.findAll('user').then(res => {
            this.allUsers = res;
            this.displayedUsers = res;
        });
    }
    constructor(nav: NavController, public api: APIService) {
        this.nav = nav;
        this.allUsers = [];
        this.displayedUsers = [];
        this.getUsers();
        this.searchUser = '';
    }

    updateUsers(searchBar) {
        this.displayedUsers = this.allUsers;

        var q = searchBar.target.value;
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
