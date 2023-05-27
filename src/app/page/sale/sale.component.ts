import { Component, OnInit } from '@angular/core';
import { SaleService } from 'src/app/core/services/sale.service';
import { ServiceDto } from 'src/app/model/service/service-dto.model';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  servicioList: ServiceDto[] = [{
    id: 1,
    name: "Computador",
    description: "Descripcion del producto 1",
    price: 200000,
    beforePrice: 230000,
    score: [],
    characteristics: "Caracteristicas 1",
    imgService: [{id:0,url:'../../../assets/img-principal/i17.jpeg'},{id:0,url:'../../../assets/img-principal/i16.jpeg'}],
    item:[{id:1,key:"Marca",value:"Marca Demo"},{id:2,key:"Item demo",value:"Valor demo"},{id:3,key:"Item demo #2",value:"Valor de demostración"}],
    service: [undefined],
    itemSelected:[{id:1,name:"Ram",description:"Ram de un celular",itemSelectedValue:[{id:1,value:"64",price:0,description:''},{id:1,value:"128",price:0,description:''},{id:1,value:"250",price:0,description:''}
    ,]},{id:1,name:"item Demo",description:"demo",itemSelectedValue:[{id:1,value:"value 1",price:0,description:''},{id:1,value:"value2",price:0,description:''},{id:1,value:"value3",price:0,description:''},{id:1,value:"value4",price:0,description:''}
    ,]}]
  },
  {
    id: 2,
    name: "producto demo",
    description: "Descripcion del producto 1",
    price: 100000,
    beforePrice: 230000,
    score: [],
    characteristics: "Caracteristicas 1",
    imgService: [{id:0,url:'../../../assets/img-principal/i12.jpeg'},{id:0,url:'../../../assets/img-principal/i11.jpeg'}],
    item:[{id:1,key:"Marca",value:"Marca Demo"},{id:2,key:"Item demo",value:"Valor demo"},{id:3,key:"Item demo #2",value:"Valor de demostración"}],
    service: [undefined],
    itemSelected:[{id:1,name:"Ram",description:"Ram de un celular",itemSelectedValue:[{id:1,value:"64",price:0,description:''},{id:1,value:"128",price:0,description:''},{id:1,value:"250",price:0,description:''}
    ,]},{id:1,name:"item Demo",description:"demo",itemSelectedValue:[{id:1,value:"value 1",price:0,description:''},{id:1,value:"value2",price:0,description:''},{id:1,value:"value3",price:0,description:''},{id:1,value:"value4",price:0,description:''}
    ,]}]
  }];

  constructor(private saleService:SaleService) {
    this.saleService.numberProductS(2);
  }

  ngOnInit(): void {
  }

}
