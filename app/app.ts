/// <reference path="../typings/modules/lodash/index.d.ts" />
import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {LoginPage} from './pages/login/login';
import {AuthService} from './shared/services/auth-service';
import {APIService} from './shared/services/api-service';
import 'rxjs/Rx';


@Component({
    templateUrl: 'build/landing.html',
    providers: [AuthService, APIService]
})
export class Sigma {
    private rootPage:any;

    constructor(private platform: Platform) {
        this.rootPage = LoginPage;

        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
        });
    }
}

ionicBootstrap(Sigma)
