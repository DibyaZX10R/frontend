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
  addUser(model:User){
    return this.httpClient.post(this.apiUrl+'/users', model);

  }
  getUser(id:String){
    return this.httpClient.get<User>(this.apiUrl+'/users/'+id);
  }
  updateUser(id: string,model:User){
    return this.httpClient.put(this.apiUrl+'/users/'+id, model)
  }
  deleteUser(id: string){
    return this.httpClient.delete(this.apiUrl+'/users/'+id)

  }

}
