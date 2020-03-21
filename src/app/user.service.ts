import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.class';
import { Observable } from 'rxjs';

const baseurl:string = "http://localhost:49908/api/users";

@Injectable({
  //decorator json object
  providedIn: 'root'
})
export class UserService {

  list(): Observable<User[]>{
    return this.http.get(`${baseurl}`) as Observable<User[]>;
  }

  constructor(
    //inject http client
    private http: HttpClient
  ) { }
}
