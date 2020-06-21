import { Injectable } from '@angular/core';

import{HttpClient,HttpHeaders} from '@angular/common/http'
import { Key } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class SaidaService {

  buscaPlaca(placa:string){
    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      observe: 'response' as 'response'
    };

    return this.http.get
    ('http://localhost:3000/entrada/placa/'+ placa)
    }

    registarSaida(id: string,datasaida:string,horariosaida: string) 
      {
        const options = 
        {
          headers: new HttpHeaders({'Content-Type':  'application/json'}),
          observe: 'response' as 'response'
        };
  
      return this.http.put('http://localhost:3000/entrada/' + id, {
        horariosaida,
        datasaida,
        
      }, options);
  }
  
  excluirRegistro(id: string) 
  {
    const options = 
    {
      headers: new HttpHeaders({'Content-Type':  'application/json'}),
      observe: 'response' as 'response'
    };

  return this.http.delete('http://localhost:3000/entrada/' + id, options);
}

  constructor(private http:HttpClient) { }
}
