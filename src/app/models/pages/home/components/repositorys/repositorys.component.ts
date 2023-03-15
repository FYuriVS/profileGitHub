import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-repositorys',
  templateUrl: './repositorys.component.html',
  styleUrls: ['./repositorys.component.scss'],
})
export class RepositorysComponent implements OnInit {
  userRepositorys!: any;
  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.getRepositorys().subscribe({
      next: (res) => {
        console.log(res);
        this.userRepositorys = res;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
