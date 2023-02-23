import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';

// modal
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import {  FormsModule } from '@angular/forms';




@NgModule({
  declarations: [AppComponent, NavBarComponent, HomeComponent, AboutComponent, SkillsComponent, ProjectsComponent, ContactComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule,SweetAlert2Module, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
