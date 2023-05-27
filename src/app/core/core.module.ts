import { CommonModule } from "@angular/common";
import { SaleService } from "./services/sale.service";
import { NgModule } from "@angular/core";


@NgModule({
    imports: [CommonModule],
    providers: [SaleService]
})
export class CoreModule{}