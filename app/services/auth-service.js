import {Component, EventEmitter} from 'angular2/core';
import {Http, HTTP_PROVIDERS, Headers, Response} from 'angular2/http';

@Component({
    providers: [Http, HTTP_PROVIDERS]
})
export class AuthService {
    constructor(http:Http) {
        this.clientId = 'bJeSCIWpvjbYCuXZNxMzVz0wglX8mHR2ZTKHxaDv';
        this.clientSecret = 'XjbfZS6Apq05PDTSL4CoFHGo7NsKVAa1XMVrVElk5N1t0dOSyqxrHPff6okAi6X6Du9XxrK4dl0mLQ0YlscJsjnL5IKhQagQdGv2SgumhYRFaMi6LtHNPXicmMr8oLdy';
        this.isConnected = false;
        this.accessToken = '';
        this.http = http;
        var token: string = localStorage.getItem('accessToken');
        if (token !== null && token !== '') {
            this.accessToken = token;
            this.isConnected = true;
        }
        this.loggedOut = new EventEmitter();
    }

    authentificate(username,password) {
        var params = 'grant_type=password&username='+username+'&password='+password;

        var headers = new Headers();
        headers.append('Authorization', 'Basic ' + btoa(this.clientId+':'+this.clientSecret));
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        var request = this.http.post('http://ns399940.ip-5-196-68.eu/o/token/',
            params,
            {headers:headers}
        ).share();

        request.subscribe(
            (res:Response) => {
                this.accessToken = res.json().access_token;
                localStorage.setItem('accessToken', this.accessToken);
            },
            err => console.log('Erreur de mot de passe')
        );

        return request;
    }

    logout() {
        this.accessToken = undefined;
        localStorage.removeItem('accessToken');
        this.loggedOut.emit(true);
    }

    isAuthenticated() {
        return this.accessToken;
    }

    appendAuth(header:Headers) {
        header.append('Authorization', 'Bearer ' + this.accessToken);
    }
}
