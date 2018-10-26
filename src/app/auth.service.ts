import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUserDetails(userid){
    console.log(userid+'1111111111111')
    return this.http.post('/api/login/', {
      userid
    }).subscribe(data => {
      console.log(data["result"].length)
    })
  }
}
