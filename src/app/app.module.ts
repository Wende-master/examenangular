import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CreateComponent } from './components/create/create.component';
import { MenuComponent } from './components/menu/menu.component';
import { appRoutingProvider, routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './components/update/update.component';
import { DetallescuboComponent } from './components/detallescubo/detallescubo.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { ServiceService } from './services/service.service';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    MenuComponent,
    UpdateComponent,
    DetallescuboComponent,
    ComentariosComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    appRoutingProvider,
    ServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
