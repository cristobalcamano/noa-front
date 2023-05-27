import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SaleService } from 'src/app/core/services/sale.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  quantity$:Observable<number>;
  constructor(private saleService:SaleService) {
    this.quantity$ = saleService.numberProduct;
  }

  ngOnInit(): void {
  }

}
