import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GettingStartedComponent } from './modules/getting-started/getting-started.component';
import { HomeComponent } from './modules/home/home.component';
import { PricingComponent } from './modules/pricing/pricing.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'getting-started',component:GettingStartedComponent},
  {path:'pricing',component:PricingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
