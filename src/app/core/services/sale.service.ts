import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { SaleDto } from "src/app/model/sale/sale-dto.model";

@Injectable()
export class SaleService {

    private saleObservable: BehaviorSubject<SaleDto> = 
        new BehaviorSubject<SaleDto>({ id: 0, allPrice: 700000, customer: { id: 0 }, employee: { id: 0 }, state: { id: 0 }, observation: '', saleXService: { id: 0, quantity: 0 } });

    private quantityObservable: BehaviorSubject<number> = 
        new BehaviorSubject<number>(0);
    
    get numberProduct(){
        return this.quantityObservable.asObservable();
    }

    numberProductS(quantity:number){
        this.quantityObservable.next(quantity);
    }

    get saleDataOut(){
        return this.saleObservable.asObservable();
    }

    set saleDataIn(data: SaleDto){    
        this.saleObservable.next(data);
    }

}