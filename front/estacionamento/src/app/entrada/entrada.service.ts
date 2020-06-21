import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EntradaService {

  cadastrarEntrada(placa: string,  modelo: string, horarioentrada: string, 
    dataentrada:string,datasaida:string,horariosaida: string) 
    {
      const options = 
      {
        headers: new HttpHeaders({'Content-Type':  'application/json'}),
        observe: 'response' as 'response'
      };

    return this.http.post('http://localhost:3000/entrada', {
      placa,
      modelo,
      horarioentrada,
      dataentrada,
      datasaida,
      horariosaida,
    }, options);
}





  constructor(private http: HttpClient) { }
}
