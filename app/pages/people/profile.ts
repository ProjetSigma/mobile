import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {APIService} from '../../shared/services/api-service';
import {User} from '../../shared/resources/user';
import {OneGroupPage} from '../groups/details';


@Component({
    templateUrl: 'build/pages/people/profile.html',
    // providers: [UserService],
})
export class PeoplePersonPage {
    public user = new User();
    private nav: NavController;

    constructor(params: NavParams, nav: NavController, public api: APIService) {
        this.nav = nav;
        this.user = params.get('user');
        this.getUser(this.user.id);
        this.getGroups();
    }

    getUser(id) {
        this.api.store.find('user', id).then(res => this.user = res);
    }

    getGroups() {
        this.api.store.findAll('membership',{'user':this.user.id}).then(res => {
            for (var membership of this.user.memberships) {
                this.api.store.find('group',membership.group_id);
            };
        });
    }

    showGroup(group) {
        this.nav.push(OneGroupPage, {group: group});
    }
}
