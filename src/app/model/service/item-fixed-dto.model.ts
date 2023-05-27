"use strict";

export class ItemFixedDto{
    public id:number;
    public key:string;
    public value:string;

    constructor(
        id:number,
        key:string,
        value:string
    ){
        this.id=id;
        this.key=key;
        this.value=value;
    }

}