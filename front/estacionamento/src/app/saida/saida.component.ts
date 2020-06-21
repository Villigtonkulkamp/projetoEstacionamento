import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import{SaidaService} from './saida.service'
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-saida',
  templateUrl: './saida.component.html',
  styleUrls: ['./saida.component.css']
})
export class SaidaComponent implements OnInit {

  displayedColumns=['id', 'placa','dataentrada', 
  'horarioentrada','datasaida','horariosaida','action']

  lista : any;

  saida = new FormGroup({
   placa : new FormControl(''),
   horarioEntrada : new FormControl(''),
  
  })

  constructor(private saidaService:SaidaService) { }

  ngOnInit(): void {

    this.saida.get('placa').valueChanges
    .subscribe(valor =>   this.saidaService.buscaPlaca(valor)
    .subscribe(resp =>{this.lista =resp,
      console.log(resp),
      console.log(this.lista)}))
  
  }

  onPesquisa(id: string) {

    let placa = this.saida.get('placa').value

    this.saidaService.buscaPlaca(placa)
    .subscribe(resp =>console.log(resp));
    
    

  }
  onSaida() {

    let placa = this.saida.get('placa').value

    this.saidaService.buscaPlaca(placa)
    .subscribe(resp =>{console.log(resp);});

  }

  registrarSaida(id:  string){
    let horarioSaida: string = formatDate(new Date(), 'HH:mm:ss', 'en-US');
    let dataSaida: string = formatDate(new Date(), 'd/MM/yyyy', 'en-US');
    
    this.saidaService.registarSaida(id, dataSaida, horarioSaida )
    .subscribe(resp =>{console.log(resp),this.saida.reset()});
    console.log("dentro do registrar saida id:" + id)
  }

  excluirRegistro(id:  string){
    this.saidaService.excluirRegistro(id)
    .subscribe(resp =>{console.log(resp),
    this.saida.reset();
    });
    console.log("dentro do EXCLUIR REGISTRO:" + id)
  }

}
