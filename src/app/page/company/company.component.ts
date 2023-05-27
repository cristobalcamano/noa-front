import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryDto } from 'src/app/model/category/category-dto';
import { CompanyDto } from 'src/app/model/company/company-dto.model';
import { CompanyApiComponent } from 'src/app/services/company/company.api';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  company: CompanyDto = {id: 1,
    phone: '',
    address: '',
    logo: '',
    us: '',
    history: '',
    email: '',
    termConditions: '',
    imgPrincipal: [],
    imgSecundary: [],
    category:[],
    socialNetwork:[],
    shedule:[]
  };
  constructor(private router: Router, private companyApi: CompanyApiComponent) {
    this.consultaCompany();
  }

  ngOnInit(): void {
    
  }

  redirect(data: CategoryDto) {
    localStorage.setItem('category',JSON.stringify(data));
    this.router.navigate(['category']);
  }

  consultaCompany(){
    this.companyApi.getCompany(1).subscribe((data) => {
      this.company = data;
      localStorage.setItem('company',JSON.stringify(data));
    });
   
  }


}
