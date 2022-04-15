import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PrimFactorizationComponent } from './prim-factorization/prim-factorization.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { NavComponent } from './nav/nav.component';
import { AngularDocumentationComponent } from './angular-documentation/angular-documentation.component';
import { PrimeFactorizationDocumentationComponent } from './prime-factorization-documentation/prime-factorization-documentation.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimFactorizationComponent,
    HomeComponent,
    DocumentationComponent,
    NavComponent,
    AngularDocumentationComponent,
    PrimeFactorizationDocumentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
