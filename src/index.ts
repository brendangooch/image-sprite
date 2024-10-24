/**
 * package barrel file
 */

export interface iSprite {
    get image(): HTMLImageElement;
    get x(): number;
    get y(): number;
    get width(): number;
    get height(): number;
};

export { ImageSprite } from './image-sprite.js';