import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl='';
  constructor(private http:HttpClient) {}
  loginUser(user:any){
    return this.http.post<any>(this.loginUrl,user)
  }
}
