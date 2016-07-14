import {Component, forwardRef} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {APIService} from '../../shared/services/api-service';
import {Group} from '../../shared/resources/group';
import {UserItem} from '../people/item';

@Component({
    templateUrl: 'build/pages/groups/details.html',
    // forwardRef résout le problème de dépendance circulaire
    directives: [forwardRef(() => UserItem)],
})
export class OneGroupPage {
    public group: Group;

    constructor(params: NavParams, public api: APIService) {
        this.group = params.get('group');
        this.getGroup(this.group.id);
        this.getRespGroup();
        this.getMembers();
    }

    getGroup(id) {
        this.api.store.find('group', id).then(res => this.group = res);
    }

    getRespGroup() {
        this.api.store.find('group', this.group.resp_group_id);
    }

    getMembers() {
        this.api.store.findAll('membership', { 'group': this.group.id }).then(res => {
            for (var membership of this.group.memberships) {
                this.api.store.find('user', membership.user_id);
            };
        });
    }
}
