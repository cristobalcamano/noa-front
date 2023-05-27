"use strict";

export class SocialNetworkDto {
    public id: number;
    public name: string;
    public logo: string;
    public url: string;
    constructor(
        id: number,
        name: string,
        logo: string,
        url: string,
    ) {
        this.id = id;
        this.name=name;
        this.logo=logo;
        this.url=url;
    }

}