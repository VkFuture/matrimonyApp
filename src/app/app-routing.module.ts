import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'profile-swipe', pathMatch: 'full' 
  },
  { 
    path: 'profile-swipe',
    loadChildren: () => import('./profile-swipe/profile-swipe.module').then(m => m.ProfileSwipePageModule) },
  { 
    path: 'profile-detail/:id', 
    loadChildren: () => import('./profile-detail/profile-detail.module').then(m => m.ProfileDetailPageModule) },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'profile-swipe',
    loadChildren: () => import('./profile-swipe/profile-swipe.module').then(m => m.ProfileSwipePageModule)
  },
  {
    path: 'profile-detail',
    loadChildren: () => import('./profile-detail/profile-detail.module').then(m => m.ProfileDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
