"use strict";

export class ImgDto {
    public id: number;
    public url: string;

    constructor(
        id: number,
        url: string
    ) {
        this.id = id;
        this.url = url;
    }

}