import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms'
import { AlertsModule } from 'angular-alert-module';
import { ApiService } from './api.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const frontEndRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      frontEndRoutes,
       {enableTracing: true }
    ),
    HttpClientModule,
    FormsModule,
    AlertsModule.forRoot(),
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
