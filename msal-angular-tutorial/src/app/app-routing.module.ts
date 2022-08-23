import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrowserUtils} from "@azure/msal-browser";
import {ProfileComponent} from "./profile/profile.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: '',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: !BrowserUtils.isInIframe() && !BrowserUtils.isInPopup() ? 'enabledNonBlocking' : 'disabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
