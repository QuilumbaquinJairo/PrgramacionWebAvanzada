import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable, retry} from 'rxjs';
import {User} from '../models/user';
import {environment as env} from "../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  headers!: HttpHeaders;

  constructor(private client: HttpClient) {
    this.headers = new HttpHeaders({'content-type': 'application/json'});
  }

  GetUsers(): Observable<User[]> {
    return this.client.get<User[]>(env.apiAddres + '/user');
  }

  GetUser(id: string): Observable<User> {
    return this.client.get<User>(env.apiAddres + '/user' + id);
  }

  AddUser(user: User): Observable<HttpResponse<any>> {
    return this.client.post(env.apiAddres + "/user/", JSON.stringify(user), {
      headers: this.headers,
      observe: 'response'
    });



  }
}
