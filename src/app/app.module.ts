import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordInputComponent } from './components/password-input/password-input.component';
import { PasswordStrengthComponent } from './components/password-strength/password-strength.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordInputComponent,
    PasswordStrengthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
