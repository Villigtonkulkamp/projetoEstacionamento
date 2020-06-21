import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CadastroComponent } from './cadastro/cadastro.component';
import { EntradaComponent } from './entrada/entrada.component';
import { AppRoutingModule } from './app-routing.module';
import { CadastroService } from './cadastro/cadastro.service'
import { FooterComponent } from './footer/footer.component';
import { EntradaService } from './entrada/entrada.service'
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AppComponent } from './app.component';
import { SaidaModule } from './saida/saida.module';
// import { SaidaComponent } from './saida/saida.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

import { HttpClientModule } from '@angular/common/http';
import { FusionChartsModule } from "angular-fusioncharts";
import { ChartComponent } from './chart/chart.component';
import { GraficoComponent } from './grafico/grafico.component';

import * as FusionCharts from "fusioncharts";
import * as charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import * as CandyTheme from "fusioncharts/themes/fusioncharts.theme.candy";
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { DropdownSaidaService } from './services/dropdown-saida.service';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { ChartService } from './chart/chart.service';
import { ChartsModule } from  "ng2-charts";

FusionChartsModule.fcRoot(FusionCharts, charts, CandyTheme);

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    MenuComponent,
    HomeComponent,
    EntradaComponent,
    FooterComponent,
    ChartComponent,
    LoadingSpinnerComponent,
    GraficoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    FusionChartsModule,
    SaidaModule,
    ChartsModule,

  ],
  exports: [
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    
  ],
  providers: [
    CadastroService, 
    EntradaService,
    DropdownSaidaService,
    ChartService
   
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
