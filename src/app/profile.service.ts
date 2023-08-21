import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private isLoggedIn: boolean;
  constructor() { }

  public loggedInStatus() {
    //check if user is loggged in

    this.isLoggedIn = false;

    return this.isLoggedIn;

  }
}
