import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {APIService} from '../../shared/services/api-service';
import {Group} from '../../shared/resources/group';
import {OneGroupPage} from './details';


@Component({
    templateUrl: 'build/pages/groups/list.html',
    // providers: [GroupService],
})
export class GroupList {
    private allGroups: Group[] = [];
    private displayedGroups: Group[] = [];
    private searchGroup: string = '';
    private nav: any;

    getGroups() {
        this.api.store.findAll('group').then(res => {
            this.allGroups = res;
            this.displayedGroups = res;
        });
    }
    constructor(nav: NavController, public api: APIService) {
        this.nav = nav;
        this.allGroups = [];
        this.displayedGroups = [];
        this.getGroups();
        this.searchGroup = '';
    }

    showGroup(group) {
        this.nav.push(OneGroupPage, {group: group});
    }

    updateGroups(searchBar) {
        this.displayedGroups = this.allGroups;

        var q = searchBar.target.value;
        if (q.trim() == '') {
            return;
        }
        q = q.toLowerCase();

        this.displayedGroups = this.allGroups.filter((group) => {
            if (group.name.toLowerCase().indexOf(q) > -1) {
                return true;
            }
            return false;
        });
    }
}
