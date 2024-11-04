import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserApiGateway {
  private apiUrl = 'https://api.example.com/users';

  constructor(private http: HttpClient) {}

  getUserById(id: number): Promise<any> {
    return this.http.get(`${this.apiUrl}/${id}`).toPromise();
  }
}
