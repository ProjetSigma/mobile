import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AnnoncesListAll} from './pages/annonces/list-all';
import {PeopleList} from './pages/people/list';
import {ChatTalks} from './pages/chat/talks';
import {AuthService} from './shared/services/auth-service';
import {LoginPage} from './pages/login/login';


@Component({
    templateUrl: 'build/home.html'
})
export class HomePage {
    private tab1Root: any;
    private tab2Root: any;
    private tab3Root: any;

    constructor(nav: NavController, auth: AuthService) {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = AnnoncesListAll;
        this.tab2Root = PeopleList;
        this.tab3Root = ChatTalks;

        // auth.loggedOut.subscribe(() => nav.push(LoginPage));
    }
}
