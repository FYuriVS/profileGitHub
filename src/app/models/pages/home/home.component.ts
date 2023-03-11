import { Component, OnChanges, OnInit } from '@angular/core';
import { iProfile } from './interfaces/profile';
import { ProfileService } from './services/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnChanges {
  user!: iProfile;
  name!: string;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {}

  getUser() {
    this.profileService.getUser(this.name).subscribe({
      next: (res) => {
        console.log(res);
        this.user = res;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  ngOnChanges(): void {
    console.log('teste');
  }
}
