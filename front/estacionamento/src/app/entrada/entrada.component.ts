import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { EntradaService } from '../entrada/entrada.service';
import { formatDate } from '@angular/common';
import { Chart } from 'chart.js';
import { GraficoService } from '../grafico/grafico.service';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})

export class EntradaComponent implements OnInit {
  dados: string = "";
  mensagem: string = "";
  showSpinner = false;

  entrada = new FormGroup({
    placa: new FormControl(''),
    modelo: new FormControl(''),
  });

  constructor(private entradaService: EntradaService, private dadosGrafico: GraficoService) { }
  
  grafico;
  

  ngOnInit(): void { this.dadosGrafico.buscaVeiculos().subscribe(res =>  this.dadosGraficoentrada(res)) }
  
  dadosGraficoentrada(res) {


    let listHoraSaida = [];      
    let contaTodosAbertos: number;
    
    //Mapeia para dois arrays os horarios de saida para contagem.
    res.forEach(element => { listHoraSaida.push(element.horariosaida) }); 

    contaTodosAbertos = listHoraSaida.reduce((prevVal, elem) => {
      if (elem == " ") {
        return prevVal + 1;
      } else {
        return prevVal;
      }
    }, 0);
    this. graficoPie2(contaTodosAbertos)
  }
  
  onEntrada() {
    
    let placa: string = this.entrada.get('placa').value;
    let horarioentrada: string = formatDate(new Date(), 'HH:mm:ss', 'en-US');
    let dataentrada: string = formatDate(new Date(), 'd/MM/yyyy', 'en-US');
    let modelo: string = this.entrada.get('modelo').value;
    
    
    console.log(horarioentrada);
    console.log(dataentrada);
    console.log("Agora será enviada a mensagem");


     this.entradaService.cadastrarEntrada(
          placa, modelo, horarioentrada, dataentrada," "," ")
          .subscribe(resp =>  {this.dados = JSON.stringify(resp.status)
          });

    this.showSpinner = true;

    this.entradaService.cadastrarEntrada(
      placa, modelo, horarioentrada, dataentrada, " ", " ")
      .subscribe(resp => {
        this.dados = JSON.stringify(resp.status);
        if (this.dados === "200") {

          this.entrada.setValue({ placa: "", modelo: "" });
          this.mensagem = "registrado com sucesso"
          console.log("fora1");
          this.showSpinner = false;

        } else {

          this.mensagem = "Favor reenviar dados"
          console.log("fora2")
        }

      })
      this.dadosGrafico.buscaVeiculos().subscribe(res =>  this.dadosGraficoentrada(res));
  }

      
  graficoPie2(ocupadas: number ){
    let livre = 20 - ocupadas

    this.grafico =  new Chart("canvas", {
      type: 'pie',
      data: {
        datasets: [{
            data: [ocupadas, livre],
            backgroundColor: ['#F00212','#A2E817'],
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Vagas Ocupadas',
            'Vagas Livres'            
        ]
    },
      options: {
        legend: {
          labels: {
              // This more specific font property overrides the global property
              fontColor: 'black',
              fontSize: 20

          }
      },
      title: {
        display: true,
        text: 'Lotação Atual',
        fontColor: 'black',
        fontSize: 20
    }

      }
    });
  }

}
