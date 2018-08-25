import {User} from "../model/user";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";

@Injectable({providedIn: 'root'})
export class UserService {

  constructor(private  http:HttpClient) {}

  addUser(user: User): Observable<User> {
    return this.http.post('http://localhost:8080/addUser', user);

  }

  checkUser(user: User): Observable<User>{
    return this.http.post('http://localhost:8080/checkUser', user);
  }
}
