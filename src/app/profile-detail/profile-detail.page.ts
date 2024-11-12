import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.page.html',
  styleUrls: ['./profile-detail.page.scss'],
})
export class ProfileDetailPage implements OnInit {
  profile: any;

  constructor(private route: ActivatedRoute, private profileService: ProfileService) {}

  ngOnInit() {
    const profileId = this.route.snapshot.paramMap.get('id');
    if (profileId) {  // Add null-check here
      this.profileService.getProfiles().subscribe((profiles) => {
        this.profile = profiles.find((profile: any) => profile.id === +profileId);
      });
    }
  }
}
