import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { FormNewItemComponent } from './form-new-item/form-new-item.component';
import { ClientsComponent } from './clients/clients.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserComponent } from './user/user/user.component';
import { DetailsComponent } from './user/details/details.component';
import { ListComponent } from './user/list/list.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { SpinnerComponent } from './shared/spinner/spinner.component'
import { SpinnerInterceptor } from './shared/spinner/spinner.interceptor';
import { CardComponent } from './card/card.component';
@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    FormNewItemComponent,
    ClientsComponent,
    FilterPipe,
    ContactComponent,
    HomeComponent,
    NavbarComponent,
    PagenotfoundComponent,
    UserComponent,
    DetailsComponent,
    ListComponent,
    SpinnerComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
