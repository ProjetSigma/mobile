import {Page, NavController} from 'ionic/ionic';
import {AnnoncesListAll} from './pages/annonces/list-all';
import {PeopleList} from './pages/people/list';
import {ChatTalks} from './pages/chat/talks';
import {AuthService} from './services/auth-service';
import {LoginPage} from './pages/login/login';


@Page({
    templateUrl: 'build/home.html'
})
export class HomePage {
    constructor(nav: NavController, auth: AuthService) {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = AnnoncesListAll;
        this.tab2Root = PeopleList;
        this.tab3Root = ChatTalks;

        auth.loggedOut.subscribe(() => nav.push(LoginPage));
    }
}
