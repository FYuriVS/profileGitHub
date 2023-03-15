import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iProfile, iRepository } from '../interfaces/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  repositorys!: any;
  user!: string;

  constructor(private httpClient: HttpClient) {}

  getUser(user: string): Observable<iProfile> {
    this.user = user;
    return this.httpClient.get<iProfile>(
      `https://api.github.com/users/${user}`
    );
  }

  getRepositorys(): Observable<iRepository> {
    return this.httpClient.get<any>(
      `https://api.github.com/users/${this.user}/repos`
    );
  }
}
