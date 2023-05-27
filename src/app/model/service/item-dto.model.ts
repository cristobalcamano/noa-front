"use strict";

import { ItemSelectedDto } from "./item-selected-dto.model";

export class ItemDto{
    public id:number;
    public name:string;
    public description:string;
    public itemSelectedValue:ItemSelectedDto[];

    constructor(
        id:number,
        name:string,
        description:string,
        itemSelectedValue:ItemSelectedDto[]
    ){
        this.id=id;
        this.name=name;
        this.description=description;
        this.itemSelectedValue=itemSelectedValue;
    }

}