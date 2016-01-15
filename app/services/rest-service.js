import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS, Headers, Response} from 'angular2/http';
import {AuthService} from './auth-service';


class RestRequest {
    constructor(url, headers: Headers, service: RestService) {
        this.url = url;
        this.headers = headers;
        this._rest = service;
        this.error_message = '';
        this._request = null;

    }

    logError(message: string) {
        this.error_message = message;
        return this;
    }

    get() {
        this._request = this._rest.http.get(this.url, {headers: this.headers}).share();
        this._attach();
        return this._request;
    }

    delete() {
        this._request = this._rest.http.delete(this.url, {headers: this.headers}).share();
        this._attach();
        return this._request;
    }

    head() {
        this._request = this._rest.http.head(this.url, {headers: this.headers}).share();
        this._attach();
        return this._request;
    }

    post(data) {
        this._addPostHeader();
        this._request = this._rest.http.post(this.url, this._data(data), {headers: this.headers}).share();
        this._attach();
        return this._request;
    }

    put(data) {
        this._addPostHeader();
        this._request = this._rest.http.put(this.url, this._data(data), {headers: this.headers}).share();
        this._attach();
        return this._request;
    }

    patch(data) {
        this._addPostHeader();
        this._request = this._rest.http.patch(this.url, this._data(data), {headers: this.headers}).share();
        this._attach();
        return this._request;
    }

    _addPostHeader() {
        this.headers.append('Content-Type', 'application/json');
    }
    _attach() {
        this._request.subscribe(
            (res:Response) => console.log(res.json()),
            err => console.log(this.error_message)
        );
        return this;
    }

    _data(data) {
        return JSON.stringify(data);
    }

}


@Component({
    viewProviders: [HTTP_PROVIDERS],
    providers: [Http, AuthService]
})
export class RestService {
    constructor(http:Http, auth:AuthService) {
        this.base_url = 'http://ns399940.ip-5-196-68.eu/';
        this.http = http;
        this.auth = auth;
        this.resource = '';
    };

    authRequest(urlInput:string = '') {
        var headers = new Headers();
        this.auth.appendAuth(headers);
        headers.append('Accept', 'application/json');

        var url = this.base_url + this.resource + '/' + urlInput;
        return new RestRequest(url, headers, this);
    }

    filter(data, keys: string[]) {
        var result = {};
        _.forEach(keys, (key) => { result[key] = data[key]; });
        return result;
    }
    useResource(resource: string) {
        this.resource = resource;
    }
}
