import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryDto } from 'src/app/model/category/category-dto';
import { ServiceDto } from 'src/app/model/service/service-dto.model';
import { ServiceApiComponent } from 'src/app/services/service/service.api';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  servicios: ServiceDto[] = [];
  serviciosSelected: ServiceDto[] = [];
  category: CategoryDto;
  showMore:boolean = false;

  constructor(private router: Router, private serviceApi:ServiceApiComponent) {
    this.category = {id:0, name:'', imgcategory:[], description:''};
  }

  ngOnInit(): void {
    var json = localStorage.getItem('category');
    if (json !== null) {
      try {
        this.category = JSON.parse(json);
      } catch (e) {
        console.error('Error al analizar la cadena JSON: ', e);
      }
    }
    this.getAllServiceByCategoria();
  }

  getAllServiceByCategoria(){
    this.serviceApi.getAllServiceByCategory(this.category.id.toString()).subscribe((data) => {
      this.servicios = data;
    });
  }

  redirectToProduct(productSelected: ServiceDto){
    window.scrollTo({ top: 0, behavior: 'smooth' });
    localStorage.setItem('productSelectView',JSON.stringify(productSelected));
    this.router.navigate(['product']); 
  }

  selectService(servicioSelected: ServiceDto) {
    //getAllServiceByParent
    this.serviceApi.getAllServiceByParent(servicioSelected.id.toString()).subscribe((data) => {
      this.servicios = data;
    });
    this.serviciosSelected.push(servicioSelected);
    localStorage.setItem('servicesselected',JSON.stringify(this.serviciosSelected));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  showMoreDown(){
    this.showMore = !this.showMore;
  }

}
