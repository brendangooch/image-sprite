/**
 * 
 */

export default class Sprite {

    private img: HTMLImageElement;
    private numCols: number;
    private numRows: number;
    private col: number = 1;
    private row: number = 1;

    public constructor(img: HTMLImageElement, numCols: number, numRows: number) {
        this.img = img;
        if (!Number.isInteger(numCols) || numCols < 1)
            throw new Error('number of columns must be an integer / whole number greater than 0');
        if (!Number.isInteger(numRows) || numRows < 1)
            throw new Error('number of rows must be an integer / whole number greater than 0');
        this.numCols = numCols;
        this.numRows = numRows;
    }

    public get image(): HTMLImageElement {
        return this.img;
    }

    public get sx(): number {
        return (this.col - 1) * this.swidth;
    }

    public get sy(): number {
        return (this.row - 1) * this.sheight;
    }

    public get swidth(): number {
        return this.img.width / this.numCols;
    }

    public get sheight(): number {
        return this.img.height / this.numRows;
    }

    // each param must be a whole number, greater than 0, less than or equal to number of cols/rows
    public changeCell(col: number, row: number): void {
        this.col = Math.ceil((col < 1) ? 1 : Math.min(col, this.numCols));
        this.row = Math.ceil((row < 1) ? 1 : Math.min(row, this.numRows));
    }

}