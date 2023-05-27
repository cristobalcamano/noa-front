"use strict";

import { StateDto } from "../state/state-dto.model";
import { UsersDto } from "../user/user-dto.model";
import { SaleXServiceDto } from "./sale-x-service-dto.model";

export class SaleDto {
    public id: number;
    public allPrice: number;
    public customer: UsersDto;
    public employee: UsersDto;
    public state: StateDto;
    public observation: string;
    public saleXService: SaleXServiceDto;

    constructor(
        id: number,

        allPrice: number,
        customer: UsersDto,
        employee: UsersDto,
        state: StateDto,
        observation: string,
        saleXService: SaleXServiceDto
    ) {
        this.id = id;
        this.allPrice = allPrice;
        this.customer = customer;
        this.employee = employee;
        this.state = state;
        this.observation = observation;
        this.saleXService = saleXService;
    }

}