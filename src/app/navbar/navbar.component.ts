import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { AppUser } from './../models/app-user';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

    appUser: AppUser;

    // user: firebase.User;
    // user$: Observable<firebase.User>

    constructor(private auth: AuthService) {
        // afAuth.authState.subscribe((user) => {
        //     this.user = user;
        // });
        // this.user$ = afAuth.authState;
        auth.appUser$.subscribe(appUser => this.appUser = appUser);
    }

    logout() {
        this.auth.logout();
    }
}
