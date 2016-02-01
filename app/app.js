import {App, Platform} from 'ionic/ionic';
import {LoginPage} from './pages/login/login';
import {AuthService} from './services/auth-service';
import {RestService} from './services/rest-service';
import 'rxjs/Rx';


@App({
    templateUrl: 'build/landing.html',
    providers: [AuthService, RestService]
})
export class Sigma {
    constructor(platform: Platform) {
        this.rootPage = LoginPage;

        platform.ready().then(() => {
            // Do any necessary cordova or native calls here now that the platform is ready
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
        });
    }
}
