"use strict";

export class ItemSelectedDto{
    public id:number;
    public value:string;
    public description:string;
    public price:number;

    constructor(
        id:number,
        value:string,
        description:string,
        price:number
    ){
        this.id=id;
        this.value=value;
        this.description=description;
        this.price=price;
    }

}