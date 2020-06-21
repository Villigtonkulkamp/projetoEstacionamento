import { Component, OnInit } from '@angular/core';
import { GraficoService } from './grafico.service';
import { Chart } from 'chart.js';




@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {
  
  grafico;
  grafico2;
  grafico3;  
  timeStamp = ["07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"];

  constructor(private dadosGrafico: GraficoService) { }

  ngOnInit(): void {

    this.dadosGrafico.buscaVeiculos().subscribe(res =>  this.dadosGraficoentrada(res))
  }

  dadosGraficoentrada(res) {


    let listHoraSaida = [];    
    let listHoraEntrada = [];    
    let contaEntrada = [];
    let contaSaida=[];
    let contaTodosAbertos: number;
    
    //Mapeia para dois arrays os horarios de entrada e saida para contagem.
    res.forEach(element => { listHoraSaida.push(element.horariosaida), listHoraEntrada.push(element.horarioentrada) }); 
    
    console.log("lista saida " + typeof(listHoraSaida[2]))

    contaTodosAbertos = listHoraSaida.reduce((prevVal, elem) => {
      if (elem == " ") {
        return prevVal + 1;
      } else {
        return prevVal;
      }
    }, 0);

    // this.resumoDatas = listHoraSaida.filter((el, i, arr) => arr.indexOf(el) == i);
    
    //conta as entradas para cada horario e salva no array conta entrada
    this.timeStamp.forEach(element => {      
      let valor = 0;      
      for (let index = 0; index < listHoraEntrada.length; index++) {
        if (element == listHoraEntrada[index].slice(0,2)) {
          valor++
        }
      }
      contaEntrada.push(valor)      
    });

    //conta as saidas para cada horario e salva no array contaSaidas
    this.timeStamp.forEach(element => {
      
      let valor = 0;
      
      for (let index = 0; index < listHoraSaida.length; index++) {
        if (element == listHoraSaida[index].slice(0,2)) {
          valor++
        }
      }
      contaSaida.push(valor)
      
    });
    
    this.graficoBarEntrada( this.timeStamp , contaEntrada)
    this.graficoBarSaida( this.timeStamp , contaSaida)
    this.graficoPie1(contaTodosAbertos)
  }

  
  graficoBarEntrada(dadosEixoX:string[], dadosEixoY:number []) {
    this.grafico = new Chart("canvas", {
      type: 'bar',
      data: {
        labels: dadosEixoX,
        datasets: [{
          label: 'Entrada de Veiculos por hora',
          data: dadosEixoY,
          backgroundColor:
            '#673ab7',
          borderColor: '#000000',
          borderWidth: 2
        }]
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
        text: 'Fluxo de Entrada ',
        fontColor: 'black',
        fontSize: 20
    },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });



  }

  graficoBarSaida(dadosEixoX:string[], dadosEixoY:number []) {
    this.grafico2 = new Chart("canvas2", {
      type: 'bar',
      data: {

        labels: dadosEixoX,
        datasets:
         [{
          label: 'Saida de Veiculos por hora',
          data: dadosEixoY,
          backgroundColor:'#673ab7',
          borderColor: '#000000',
          borderWidth: 2
        }]
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
        text: 'Fluxo de Saída ',
        fontColor: 'black',
        fontSize: 20
    },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });



  }

  graficoPie1(ocupadas: number ,total?: number){
    let livre = 20 - ocupadas

    this.grafico3 =  new Chart("canvas3", {
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
    
};


