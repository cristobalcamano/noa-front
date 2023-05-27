import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SaleService } from 'src/app/core/services/sale.service';
import { ItemDto } from 'src/app/model/service/item-dto.model';
import { ItemSelectedDto } from 'src/app/model/service/item-selected-dto.model';
import { ServiceDto } from 'src/app/model/service/service-dto.model';

@Component({
  selector: 'app-product-service',
  templateUrl: './product-service.component.html',
  styleUrls: ['./product-service.component.css']
})
export class ProductServiceComponent implements OnInit {

  description: boolean = true;
  calificationFlag: boolean = true;
  count: number = 1;
  quantity$:Observable<number>;

  price:number = 0;
  
  itemSelectedvalues:ItemDto[] = [];

  servicio: ServiceDto = {
    id: 0,
    name: "",
    description: "",
    price: 0,
    beforePrice: 0,
    score: [],
    characteristics: "",
    imgService: [],
    item:[],
    service: [undefined],
    itemSelected:[]
  };

  constructor(private saleService:SaleService) {
    this.quantity$ = saleService.numberProduct;
    this.count=1;

    var json = localStorage.getItem('productSelectView');
    if (json !== null) {
      try {
        this.servicio = JSON.parse(json);
        this.price=this.servicio.price;
      } catch (e) {
        console.error('Error al analizar la cadena JSON: ', e);
      }
    }
   }

  ngOnInit(): void {
  }

  agregarCantidad(){
    this.count++;
    this.validatePriceProduct();
  }

  quitarCantidad(){
    if(this.count<2){
      this.count == 1;
    } else {
      this.count--;
    }
    this.validatePriceProduct();
  }

  changeeYelash(){
    this.description = !this.description;
  }

  quantity: number = 0;
  agregarAlCarritoCompras(){
    this.quantity++;
    this.saleService.numberProductS(this.quantity);
  }

  selecteditemSelectedValue(idItem:number, idSelectedItem:number, priceReferential:number,description:string){
    var itemSelectedvalues:ItemDto = 
    {id:idItem,name:'',description:'',itemSelectedValue:[{id:idSelectedItem,value:'',description:description,price:priceReferential}]};
    this.validateItemValue2(idItem);
    this.itemSelectedvalues.push(itemSelectedvalues);
    this.validatePriceProduct();
  }

  validateItemValueClassActive(idItem:number, idSelectedItem:number){
    for (let index = 0; index < this.itemSelectedvalues.length; index++) {
      if(idItem===this.itemSelectedvalues[index].id){
        for(let ndex = 0; ndex < this.itemSelectedvalues[index].itemSelectedValue.length; ndex++){
          if(this.itemSelectedvalues[index].itemSelectedValue[ndex].id===idSelectedItem){
            return true;
          }
        }
      }
    }
    return false;
  }

  validateItemValue(idItem:number, idSelectedItem:number){
    for (let index = 0; index < this.itemSelectedvalues.length; index++) {
      if(idItem===this.itemSelectedvalues[index].id){
        for(let ndex = 0; ndex < this.itemSelectedvalues[index].itemSelectedValue.length; ndex++){
          if(this.itemSelectedvalues[index].itemSelectedValue[ndex].id===idSelectedItem){
            this.itemSelectedvalues.splice(index);
            return true;
          }
        }
      }
    }
    return false;
  }

  validateItemValue2(idItem:number){
    for (let index = 0; index < this.itemSelectedvalues.length; index++) {
      if(idItem===this.itemSelectedvalues[index].id){          
        this.itemSelectedvalues.splice(index,1);
      }
    }
  }

  validatePriceProduct(){
    this.price = this.servicio.price;
    for (let index = 0; index < this.itemSelectedvalues.length; index++) {
        for(let ndex = 0; ndex < this.itemSelectedvalues[index].itemSelectedValue.length; ndex++){
          this.price = this.price+this.itemSelectedvalues[index].itemSelectedValue[ndex].price;
        }
    }
    this.price = this.price*this.count;
  }

}
