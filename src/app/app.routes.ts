import { Routes } from '@angular/router';
import { Produits } from './produits/produits';
import { AddProduit } from './add-produit/add-produit';
import { UpdateProduitComponent } from './update-produit/update-produit';
import { LoginComponent } from './login/login';



export const routes: Routes = [{path: "produits", component : Produits},
    {path: "add-produit", component : AddProduit},
    {path: "updateProduit/:id", component: UpdateProduitComponent},
    {path: 'login', component: LoginComponent},
    {path: "", redirectTo: "produits", pathMatch: "full"},


];
