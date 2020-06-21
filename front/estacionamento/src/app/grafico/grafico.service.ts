import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class GraficoService {




buscaVeiculos(){
  const options = {
    headers: new HttpHeaders({'Content-Type':  'application/json', }),
    observe: 'response' as 'response'
  };
  return this.http.get ('http://localhost:3000/entrada') 
  }

  constructor(private http:HttpClient) { }
}

