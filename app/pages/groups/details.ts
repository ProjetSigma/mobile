import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {APIService} from '../../shared/services/api-service';
import {Group} from '../../shared/resources/group';


@Component({
    templateUrl: 'build/pages/groups/details.html',
    // providers: [GroupService],
})
export class OneGroupPage {
    public group = new Group();

    constructor(params: NavParams, public api: APIService) {
        this.group = params.get('group');
        this.getGroup(this.group.id);
    }

    getGroup(id) {
        this.api.store.find('group', id).then(res => this.group = res);
    }
}
