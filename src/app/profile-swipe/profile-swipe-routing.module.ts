import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ProfileSwipePage } from './profile-swipe.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileSwipePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), MatIconModule],
  exports: [RouterModule],
})
export class ProfileSwipePageRoutingModule {}
