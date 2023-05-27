import { Component, OnInit } from '@angular/core';
import { CompanyDto } from 'src/app/model/company/company-dto.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  company: CompanyDto = {
    id: 1,
    phone: '',
    address: '',
    logo: '',
    us: '',
    history: '',
    email: '',
    termConditions: '',
    imgPrincipal: [],
    imgSecundary: [],
    category: [],
    socialNetwork: [],
    shedule: []
  };


  constructor() {
    var json = localStorage.getItem('company');
    if (json !== null) {
      try {
        this.company = JSON.parse(json);
      } catch (e) {
        console.error('Error al analizar la cadena JSON: ', e);
      }
    }
  }

  ngOnInit(): void {
  }

}
