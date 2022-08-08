import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchitectureComponent } from './modules/Architecture/architecture/architecture.component';
import { GettingStartedComponent } from './modules/getting-started/getting-started.component';
import { GuidesComponent } from './modules/guides/guides/guides.component';
import { HomeComponent } from './modules/home/home.component';
import { PricingComponent } from './modules/pricing/pricing.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'getting-started',component:GettingStartedComponent},
  {path:'pricing',component:PricingComponent},
  {path:'Architecture',component:ArchitectureComponent},
  {path:'Guides',component:GuidesComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
