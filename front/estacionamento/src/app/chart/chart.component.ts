import { Component, OnInit } from '@angular/core';
import { ChartService } from './chart.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  dataSource: Object;
  dataSource2: Object;
  lista: any;
  chartDados:any;

  constructor(private datachart: ChartService) {
    //STEP 2 - Chart Data
    const chartData = [
      
      {
        label: "07:00",
        value: "8"
      },{
        label: "08:00",
        value: "15"
      },
      {
        label: "09:00",
        value: "12"
      },
      {
        label: "10:00",
        value: "5"
      },
      {
        label: "11:00",
        value: "4"
      },
      {
        label: "12:00",
        value: "13"
      },
      {
        label: "13:00",
        value: "19"
      },
      {
        label: "14:00",
        value: "6"
      },
      {
        label: "15:00",
        value: "3"
      }
      ,
      {
        label: "16:00",
        value: "5"
      }
      ,
      {
        label: "17:00",
        value: "12"
      }
      ,
      {
        label: "18:00",
        value: "25"
      }
      ,
      {
        label: "19:00",
        value: "13"
      }
      ,
      {
        label: "20:00",
        value: "7"
      }
      ,
      {
        label: "21:00",
        value: "1"
      }
      ,
      {
        label: "22:00",
        value: "0"
      }
    ];

    // STEP 3 - Chart Configuration

    const dataSource = {
      chart: {
        //Set the chart caption
        caption: "ANÁLISE DE ENTRADAS",
        //Set the chart subcaption
        subCaption: "",
        //Set the x-axis name
        xAxisName: "Horario",
        //Set the y-axis name
        yAxisName: "Entradas por Hora",
        numberSuffix: "",
        //Set the theme for your chart
        theme: "candy",

      },
      // Chart Data - from step 2
       data: chartData
    };
    
    this.dataSource = dataSource;
// ----------------------------------------

    const blabla = [
      
      {
        label: "07:00",
        value: "0"
      },{
        label: "08:00",
        value: "0"
      },
      {
        label: "09:00",
        value: "2"
      },
      {
        label: "10:00",
        value: "5"
      },
      {
        label: "11:00",
        value: "4"
      },
      {
        label: "12:00",
        value: "26"
      },
      {
        label: "13:00",
        value: "19"
      },
      {
        label: "14:00",
        value: "6"
      },
      {
        label: "15:00",
        value: "3"
      }
      ,
      {
        label: "16:00",
        value: "15"
      }
      ,
      {
        label: "17:00",
        value: "12"
      }
      ,
      {
        label: "18:00",
        value: "2"
      }
      ,
      {
        label: "19:00",
        value: "2"
      }
      ,
      {
        label: "20:00",
        value: "11"
      }
      ,
      {
        label: "21:00",
        value: "22"
      }
      ,
      {
        label: "22:00",
        value: "30"
      }
    ];

  
    const dataSource2 = {
      chart: {
        //Set the chart caption
        caption: "ANÁLISE DE SAÍDAS",
        //Set the chart subcaption
        subCaption: "",
        //Set the x-axis name
        xAxisName: "Horario",
        //Set the y-axis name
        yAxisName: "saídas por Hora",
        
        numberSuffix: "",
        //Set the theme for your chart
        theme: "candy"
      },
      // Chart Data - from step 2
      data: this.lista
    };

    this.dataSource2 = dataSource2;
  }


  ngOnInit(): void {

    this.datachart.buscaVeiculos()
    .subscribe(resp => {this.lista = resp;
      console.log(resp)})
  }0
}

