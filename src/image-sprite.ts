/**
 * 
 */

import type { iSprite } from "./index.js";

export class ImageSprite implements iSprite {

    private img: HTMLImageElement;
    private properties = {
        numCols: 1,
        numRows: 1,
        column: 1,
        row: 1,
    };

    public constructor(img: HTMLImageElement, numCols: number, numRows: number) {
        this.img = img;
        this.properties.numCols = numCols;
        this.properties.numRows = numRows;
    }

    public get image(): HTMLImageElement {
        return this.img;
    }

    public get sx(): number {
        return (this.properties.column - 1) * this.swidth;
    }

    public get sy(): number {
        return (this.properties.row - 1) * this.sheight;
    }

    public get swidth(): number {
        return this.img.width / this.properties.numCols;
    }

    public get sheight(): number {
        return this.img.height / this.properties.numRows;
    }

    public col(column: number): ImageSprite {
        this.properties.column = column;
        return this;
    }

    public row(row: number): ImageSprite {
        this.properties.row = row;
        return this;
    }

}