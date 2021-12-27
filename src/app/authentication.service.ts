import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  
  constructor(private http: HttpClient) { }

  getUser(): any {
    return this.http.get('../assets/emails.json');
  }
}
