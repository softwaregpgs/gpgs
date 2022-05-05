import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import  {MatIconModule} from '@angular/material/icon';
import  {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginEmpresaComponent } from './login-empresa/login-empresa.component';
import { LoginClienteComponent } from './login-cliente/login-cliente.component';
import { FooterComponent } from './footer/footer.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginEmpresaComponent,
    LoginClienteComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginClienteComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
