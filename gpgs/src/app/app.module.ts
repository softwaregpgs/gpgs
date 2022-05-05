import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BotonComponent } from './boton/boton.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import  {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    BotonComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: '', component: BotonComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
