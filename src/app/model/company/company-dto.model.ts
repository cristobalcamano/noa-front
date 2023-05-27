"use strict";

import { CategoryDto } from "../category/category-dto";
import { ImgDto } from "../img/img-model.dto";
import { Schedule } from "./resources/schedule.model";
import { SocialNetworkDto } from "./resources/social-netword.model";

export class CompanyDto {
    public id: number;
    public phone: string;
    public address: string;
    public logo: string;
    public us: string;
    public history: string;
    public email: string;
    public termConditions: string;

    public imgPrincipal: ImgDto[];
    public imgSecundary: ImgDto[];

    public category:CategoryDto[];

    public shedule: Schedule[];
    public socialNetwork: SocialNetworkDto[];
    constructor(
        id: number,

        phone: string,
        address: string,
        logo: string,
        us: string,
        history: string,
        email: string,
        termConditions: string,
        imgPrincipal: ImgDto[],
        imgSecundary: ImgDto[],
        category:CategoryDto[],
        shedule: Schedule[],
        socialNetwork: SocialNetworkDto[]
    ) {
        this.id = id;
        this.phone = phone;
        this.address = address;
        this.logo = logo;
        this.us = us;
        this.history = history;
        this.email = email;
        this.termConditions = termConditions;
        this.imgPrincipal = imgPrincipal;
        this.imgSecundary = imgSecundary;
        this.category=category;
        this.shedule=shedule;
        this.socialNetwork=socialNetwork;
    }

}