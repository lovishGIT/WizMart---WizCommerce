import { StaticImageData } from 'next/image';

export type Product = {
    id: number;
    name: string;
    price: number;
    image: string | StaticImageData;
    category: string;
    rating: number;
    isNew?: boolean;
    discount?: number;
};

export type Category = {
    id: number;
    name: string;
    image: string | StaticImageData;
};

export type Banner = {
    id: number;
    title: string;
    subtitle: string;
    cta: string;
    image: string | StaticImageData;
    color: string;
};
