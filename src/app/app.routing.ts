import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from './components/home/home.component';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';
import { DetallescuboComponent } from './components/detallescubo/detallescubo.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';


const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "login", component: LoginComponent },
    { path: "registro", component: RegistroComponent },
    { path: "crear", component: CreateComponent },
    { path: "editar/:id", component: UpdateComponent },
    { path: "detalles/:marca", component: DetallescuboComponent },
    { path: "comentarios/:idcubo", component: ComentariosComponent },


]
export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
