import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iProfile } from '../interfaces/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private httpClient: HttpClient) {}

  getUser(user: string): Observable<iProfile> {
    return this.httpClient.get<iProfile>(
      `https://api.github.com/users/${user}`
    );
  }
}
