import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  cadastraCliente(
    nome: string,
    sobrenome: string,
    nascimento: string,
    placa: string,
    modelo: string) 
    
    {
    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      observe: 'response' as 'response'
    };

    return this.http.post('http://localhost:3000/cliente', {
      nome,
      sobrenome,
      nascimento,
      placa,
      modelo,
    }, options);
}
  constructor(private http: HttpClient) { }
}
