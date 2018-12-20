import { Image } from './Image';

export class Product {
    id: number;
    slug: string;
    price: number;
    name: string;
    image: Image;
    gallery: Image[];
}