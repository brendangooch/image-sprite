/**
 * 
 */

import { iSprite } from "./index.js";

export class ImageSprite implements iSprite {

    private img: HTMLImageElement;
    private numCols: number;
    private numRows: number;
    private current = { col: 1, row: 1 };

    public constructor(img: HTMLImageElement, numCols: number, numRows: number) {
        this.img = img;
        this.numCols = numCols;
        this.numRows = numRows;
    }

    public get image(): HTMLImageElement {
        return this.img;
    }

    public get x(): number {
        return (this.current.col - 1) * this.width;
    }

    public get y(): number {
        return (this.current.row - 1) * this.height;
    }

    public get width(): number {
        return this.img.width / this.numCols;
    }

    public get height(): number {
        return this.img.height / this.numRows;
    }

    public col(col: number): ImageSprite {
        this.current.col = col;
        return this;
    }

    public row(row: number): ImageSprite {
        this.current.row = row;
        return this;
    }

}