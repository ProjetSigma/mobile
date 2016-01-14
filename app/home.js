import {Page} from 'ionic/ionic';
import {AnnoncesListAll} from './pages/annonces/list-all';
import {PeopleList} from './pages/people/list';
import {ChatTalks} from './pages/chat/talks';


@Page({
    templateUrl: 'build/home.html'
})
export class HomePage {
    constructor() {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = AnnoncesListAll;
        this.tab2Root = PeopleList;
        this.tab3Root = ChatTalks;
    }
}
