"use strict";

import { ImgDto } from "../img/img-model.dto";

export class CategoryDto {
    public id: number;
    public name: string;
    public imgcategory: ImgDto[];
    public description: string;



    constructor(
        id: number,

        name: string,
        imgcategory: ImgDto[],
        description: string
    ) {
        this.id = id;

        this.name = name;
        this.imgcategory = imgcategory;
        this.description = description;
    }

}