import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { CadastroService } from './cadastro.service';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})


export class CadastroComponent implements OnInit {

  dados;
  mensagem;

cadastro = new FormGroup({

  nome: new FormControl(''),
  sobrenome: new FormControl(''),
  nascimento: new FormControl(''),
  placa: new FormControl(''),
  modelo: new FormControl(''),  
});

  constructor(private cadastroService: CadastroService) { }


  onCadastrar() {
    console.log("teste on cadastrar")
    let nome: string = this.cadastro.get('nome').value;
    let sobrenome: string = this.cadastro.get('sobrenome').value;
    let nascimento: string = this.cadastro.get('nascimento').value;
    let placa: string = this.cadastro.get('placa').value;
    let modelo: string = this.cadastro.get('modelo').value;
    console.log("teste on cadastrar 2")
    
    this.cadastroService.cadastraCliente(
      nome, sobrenome, nascimento, placa,modelo)
      .subscribe(resp => {
        
        console.log("teste on cadastrar 3")
    

        this.dados = JSON.stringify(resp.status);
        if (this.dados === "200") {

           this.cadastro.setValue({ nome:"", sobrenome: "", nascimento: "", placa: "", modelo: "" });
          this.mensagem = "Cliente registrado com sucesso"
 
          // this.showSpinner = false;

        } else {

          this.mensagem = "Favor reenviar dados"
       
        }

      })
  
  }
 
    ngOnInit(): void {
  }

}
