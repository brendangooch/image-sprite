/**
 * package barrel file
 */

export interface iSprite {
    get x(): number;
    get y(): number;
    get width(): number;
    get height(): number;
    col(col: number): iSprite;
    row(row: number): iSprite;
};

export { ImageSprite } from './image-sprite.js';