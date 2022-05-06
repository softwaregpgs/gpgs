import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import  {MatIconModule} from '@angular/material/icon';
import  {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RegistroEmpresaComponent } from './registro-empresa/registro-empresa.component';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    RegistroEmpresaComponent,
    RegistroClienteComponent
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
      { path: 'login', component: LoginComponent },
      { path: 'registroEmpresa', component: RegistroEmpresaComponent },
      { path: 'registroCliente', component: RegistroClienteComponent },
      { path: 'home', component: HomeComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
