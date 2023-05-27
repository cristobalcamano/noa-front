import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompanyDto } from 'src/app/model/company/company-dto.model';
import { catchError, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { ServiceDto } from 'src/app/model/service/service-dto.model';

@Injectable({
    providedIn: 'root'
})
export class ServiceApiComponent {

  constructor(private http: HttpClient) { }

  getAllServiceByCategory(categoryId:string) {

    return this.http.get<ServiceDto[]>('http://localhost:4042/api/es/v1/category/'+categoryId+'/services')
      .pipe(catchError(e => {
        return throwError(e);
    }));
  }

  getAllServiceByParent(parentId:string) {
    return this.http.get<ServiceDto[]>('http://localhost:4042/api/es/v1/category/service/'+parentId+'/services-son')
      .pipe(catchError(e => {
        return throwError(e);
    }));
  }
}