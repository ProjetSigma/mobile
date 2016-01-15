import {Component} from 'angular2/core';
import {RestService} from '../rest-service';
import {AuthService} from '../auth-service';
import {Http} from 'angular2/http';

@Component({})
export class UserService extends RestService {
    constructor(http: Http, auth: AuthService) {
        super(http, auth);
        this.users = [];
        this.useResource('user');
    }

    getUsers() {
        return this.authRequest()
            .logError('Erreur sur la récupération des utilisateurs')
            .get();
    }

    getUser(id: string) {
        return this.authRequest(id + '/')
            .logError('Erreur sur la récupération de l\'utilisateur')
            .get();
    }

    editUser(user:User) {
        var data = this.filter(user, ['email', 'lastname', 'firstname', 'phone']);

        return this.authRequest(user.id + '/')
            .logError('Erreur sur la modification du profil de l\'utilisateur')
            .put(data);
    }

    editPassword(actualPassword:string, newPassword:string) {
        return this.authRequest('change_password/')
            .put({old_password: actualPassword, password: newPassword});
    }

    getMe() {
        return this.authRequest('me/')
            .logError('Erreur sur la récupération de l\'utilisateur')
            .get();
    }
}
