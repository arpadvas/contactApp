import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { PanelModule } from 'primeng/primeng';
import { PanelComponent } from './components/panel/panel.component';
import { ContactListElementComponent } from './components/contact-list-element/contact-list-element.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ContactComponent,
    PanelComponent,
    ContactListElementComponent,
    AddContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    CollapseModule.forRoot(),
    PanelModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
