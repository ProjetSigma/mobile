import {App, Platform} from 'ionic/ionic';
import {LoginPage} from './pages/login/login';
import {AuthService} from './services/users/auth-service'
import 'rxjs/Rx';


@App({
    templateUrl: 'build/landing.html',
    providers: [AuthService]
})
export class Sigma {
    constructor(platform: Platform) {
        this.rootPage = LoginPage;

        platform.ready().then(() => {
            // Do any necessary cordova or native calls here now that the platform is ready
        });
    }
}
