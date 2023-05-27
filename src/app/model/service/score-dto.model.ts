"use strict";

import { ItemDto } from "./item-dto.model";
import { ItemFixedDto } from "./item-fixed-dto.model";
import { ItemSelectedDto } from "./item-selected-dto.model";

export class ScoreDto{
    public id:number;
    public calification:number;
    public createdDate: string;
    

    constructor(
        id:number,
        calification:number,
        createdDate:string
    ){
        this.id=id;
        this.calification=calification;
        this.createdDate=createdDate;
    }

}