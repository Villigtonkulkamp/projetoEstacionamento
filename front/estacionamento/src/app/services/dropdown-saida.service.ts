import { Injectable } from '@angular/core';

import{HttpClient,HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DropdownSaidaService {

  constructor(private http: HttpClient) { }

  buscaPlaca(placa:string){
    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      observe: 'response' as 'response'
    };

    return this.http.get
    ('http://localhost:3000/buscaplaca:'+placa)
    }


}


