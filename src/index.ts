/**
 * package barrel file
 */

export interface iSprite {
    get image(): HTMLImageElement;
    get sx(): number;
    get sy(): number;
    get swidth(): number;
    get sheight(): number;
    get dwidth(): number;
    get dheight(): number;
};

export { ImageSprite } from './image-sprite.js';