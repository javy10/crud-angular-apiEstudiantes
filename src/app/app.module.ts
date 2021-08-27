import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './estudiante/principal/principal.component';

import { FormsModule } from '@angular/forms';
import { ListadoComponent } from './estudiante/listado/listado.component';
import { RegistroComponent } from './estudiante/registro/registro.component';
import { NavComponent } from './estudiante/nav/nav.component';
import { HeaderComponent } from './estudiante/header/header.component';
import { FooterComponent } from './estudiante/footer/footer.component'
import { ErrorTailorModule } from '@ngneat/error-tailor';


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
    FormsModule,
    ErrorTailorModule.forRoot({
      errors: {
        useValue: {
          required: 'Campo requerido!',
          minlength: ({ requiredLength, actualLength }) => 
                      `Expect ${requiredLength} but got ${actualLength}`,
          invalidAddress: error => `Address isn't valid`
        }
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
