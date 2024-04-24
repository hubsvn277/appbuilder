import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RevenueType } from '../models/e-commerce/revenue-type';

@Injectable({
  providedIn: 'root'
})
export class ECommerceService {
  constructor(
    private http: HttpClient
  ) { }

  public getRevenueList(): Observable<RevenueType[]> {
    return this.http.get<RevenueType[]>("https://excel2json.io/api/share/03e74dde-d2e1-4fee-437d-08da496bf5f2");
  }
}
