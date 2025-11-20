import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
@Injectable({
  providedIn: 'root'
})
export class Auth {
isAdmin() {
throw new Error('Method not implemented.');
}
  users: User[] = [{"username":"admin","password":"123","roles":['ADMIN']},
                    {"username":"nadhem","password":"123","roles":['USER']} ];
  public loggedUser!: string;
  public isloggedIn: boolean = false;
  public roles!: string[];
  constructor() { }

  
  SignIn(user: User): boolean {
    let validUser: boolean = false;
this.users.forEach((curUser) => {
if(user.username== curUser.username && user.password==curUser.password) {
validUser = true;
this.loggedUser = curUser.username;
this.isloggedIn = true;
this.roles = curUser.roles;
localStorage.setItem('loggedUser',this.loggedUser);
localStorage.setItem('isloggedIn',String(this.isloggedIn));}});
  return validUser;
}
isAdminUser(): boolean {
  if (!this.roles) return false;
  return this.roles.indexOf('ADMIN') > -1;

}
}
