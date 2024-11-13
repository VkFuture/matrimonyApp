import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.page.html',
  styleUrls: ['./profile-detail.page.scss'],
})
export class ProfileDetailPage implements OnInit {
  profile: any;
  profiles: any[] = [];
  currentIndex = 0;
  startX = 0; // Initial touch position (start)
  isSwiping = false; // Flag to check if the user is swiping

  @ViewChild('sliderElement') sliderElement: any;

  get currentProfile() {
    return this.profiles[this.currentIndex];
  }

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private toastController: ToastController,
    private router: Router
  ) {}

  ngOnInit() {
    const profileId = this.route.snapshot.paramMap.get('id');
    this.profileService.getProfiles().subscribe((profiles) => {
      this.profiles = profiles;

      // Find and set the initial index of the profile based on the route ID
      if (profileId) {
        const index = this.profiles.findIndex(
          (profile: any) => profile.id === +profileId
        );
        this.currentIndex = index !== -1 ? index : 0; // Default to first if not found
      }
    });
  }

  async showToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'top',
      color: color,
      cssClass: 'custom-toast',
    });
    toast.present();
  }

  swipeLeft() {
    this.showToast("Not Interested", "danger");
    this.nextProfile();
  }

  swipeLeftRemove(profile: any) {
    this.showToast("Not Interested", "danger");
    this.removeProfile(profile);  // Remove the specific profile from queue
  }

  removeProfile(profile: any) {
    const index = this.profiles.indexOf(profile);

    if (index !== -1) {
      this.profiles.splice(index, 1);  // Removes the profile at the given index
    }
  }

  swipeSelect(profile: any) {
    this.router.navigate(['/profile-detail', profile.id]); //Navi.. from id
  }

  swipeRight() {
    this.showToast("Interested", "success");
    this.nextProfile();
  }

  shortlist() {
    this.showToast("Shortlisted", "primary");
    this.nextProfile();
  }

  nextProfile() {
    if (this.currentIndex < this.profiles.length - 1) {
      this.currentIndex++;
    } else {
      this.showToast("No more profiles", "warning");
    }
  }

  // Handle swiping to the next slide
  nextSlide() {
    if (this.currentIndex < this.profiles.length - 1) {
      this.currentIndex++;
      this.showToast("Interested", "success");
    }
  }

  // Handle swiping to the previous slide
  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.showToast("Not Interested", "danger");
    }
  }

  // Start touch event (track the start position)
  onTouchStart(event: TouchEvent) {
    this.startX = event.touches[0].clientX; // starting touch position
  }

  onTouchMove(event: TouchEvent) {
    const moveX = event.touches[0].clientX; // Track the move distance
    const swipeDistance = this.startX - moveX;

    if (Math.abs(swipeDistance) > 5) {
      this.isSwiping = true;

      if (swipeDistance < 0) {
        this.prevSlide();
      }
      else if (swipeDistance > 0) {
        this.nextSlide();
      }
    }
  }

  // End touch 
  onTouchEnd(event: TouchEvent) {
    // Reset after touch ends
    this.startX = 0;
    this.isSwiping = false;
  }
}
