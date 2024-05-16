import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import User from '../Types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl="http://localhost:3000";
  httpClient=inject(HttpClient)

  constructor() { }

  getUsers(){
    return this.httpClient.get<User[]>(this.apiUrl+'/users');
  }
}
