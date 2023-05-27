"use strict";

export class SaleXServiceDto{
    public id:number;
    public quantity:number;

    constructor(
        id:number,
        quantity:number,
    ){
        this.id=id;
        this.quantity=quantity;
    }

}