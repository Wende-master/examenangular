import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from './components/home/home.component';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';


const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "crear", component: CreateComponent },
    { path: "editar/:id", component: UpdateComponent },


]
export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
