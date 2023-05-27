"use strict";

export class Schedule {
    public id: number;
    public label: string;
    public value: string;

    constructor(
        id: number,
        label: string,
        value: string,
    ) {
        this.id = id;
        this.label = label;
        this.value = value;
    }

}