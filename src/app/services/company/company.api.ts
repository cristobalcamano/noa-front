import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompanyDto } from 'src/app/model/company/company-dto.model';
import { catchError, throwError } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CompanyApiComponent {

  constructor(private http: HttpClient) { }

  getCompany(companyId:number) {
    return this.http.get<CompanyDto>('http://localhost:3030/api/es/v1/company/'+companyId)
      .pipe(catchError(e => {
        return throwError(e);
    }));
  }
}