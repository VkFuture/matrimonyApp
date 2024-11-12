import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { IonicModule } from '@ionic/angular';
import { ProfileSwipePageRoutingModule } from './profile-swipe-routing.module';
import { ProfileSwipePage } from './profile-swipe.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileSwipePageRoutingModule,
    MatIconModule
  ],
  declarations: [ProfileSwipePage]
})
export class ProfileSwipePageModule {}
