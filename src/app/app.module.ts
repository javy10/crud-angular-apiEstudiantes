import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';

import { FormsModule } from '@angular/forms';
import { ListadoComponent } from './estudiante/listado/listado.component';
import { RegistroComponent } from './estudiante/registro/registro.component';
import { NavComponent } from './estudiante/nav/nav.component';
import { HeaderComponent } from './estudiante/header/header.component';
import { FooterComponent } from './estudiante/footer/footer.component'


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ListadoComponent,
    RegistroComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
