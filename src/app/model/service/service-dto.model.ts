"use strict";

import { ImgDto } from "../img/img-model.dto";
import { ItemDto } from "./item-dto.model";
import { ItemFixedDto } from "./item-fixed-dto.model";
import { ItemSelectedDto } from "./item-selected-dto.model";
import { ScoreDto } from "./score-dto.model";

export class ServiceDto{
    public id:number;
    public name:string;
    public description:string;
    public price:any;
    public beforePrice:any;
    public characteristics:string;
    public imgService:ImgDto[];
    public service:any;
    public score:ScoreDto[];
    
    public item:ItemFixedDto[];
    public itemSelected:ItemDto[];
    

    constructor(
        id:number,
        name:string,
        description:string,
        price:number,
        characteristics:string,
        beforePrice:number,
        score:ScoreDto[],
        imgService:[any],
        service:[any],
        item:ItemFixedDto[],
        itemSelected:ItemDto[]
    ){
        this.id=id;
        this.name=name;
        this.description=description;
        this.price=price;
        this.characteristics=characteristics;
        this.name=name;
        this.imgService=imgService;
        this.service=service;
        this.item=item;
        this.itemSelected=itemSelected;
        this.beforePrice=beforePrice;
        this.score=score;
    }

}