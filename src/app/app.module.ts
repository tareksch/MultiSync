import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GettingStartedComponent } from './modules/getting-started/getting-started.component';
import { HomeComponent } from './modules/home/home.component';
import { MainComponent } from './modules/main/main.component';
import { PricingComponent } from './modules/pricing/pricing.component';
import { GuidesComponent } from './modules/guides/guides/guides.component';
import { ArchitectureComponent } from './modules/Architecture/architecture/architecture.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GettingStartedComponent,
    MainComponent,
    PricingComponent,
    GuidesComponent,
    ArchitectureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
