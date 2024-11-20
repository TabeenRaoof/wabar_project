import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  private url = 'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords='
  private endUrl = '&apikey=G2ZIGCAH73HIAB78'

   constructor(private http: HttpClient) { }

  search(symbol: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}${symbol}${this.endUrl}`)
  }

}


// www.alphavantage.co


