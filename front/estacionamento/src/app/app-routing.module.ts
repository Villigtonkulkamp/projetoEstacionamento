import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import {  EntradaComponent } from './entrada/entrada.component';
import { SaidaComponent } from './saida/saida.component';
import { ChartComponent } from './chart/chart.component';
import { GraficoComponent } from './grafico/grafico.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'entrada',component:EntradaComponent},
  {path:'saida',component:SaidaComponent},
  {path:'cadastro',component:CadastroComponent},
  // {path:'grafico',component:ChartComponent},
  {path:'grafico',component: GraficoComponent},

];

const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
