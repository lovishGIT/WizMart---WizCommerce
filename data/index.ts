import { Product, Category, Banner } from '@/types';

import MenCottonTshirt from "./assets/men-cotton-tshirt.png";
import MenLeatherWallet from "./assets/men-leather-wallet.png";
import PotteCeramicCoffeeMug from "./assets/potte-ceramic-mugs.png";
import RunningShoes from "./assets/running-shoes-black.png";
import SmartWatch from "./assets/smart-watch.png";
import WirelessEarphones from "./assets/wireless-earphones.png";

import CookWithConfidenceCollection from "./assets/cook-with-confidence.png";
import SummerCollection from "./assets/summer-collection.png";
import NewTechArrivals from "./assets/new-tech-arrivals.png";

import ElectronicsCategory from "./assets/electronics-category.png";
import ClothingCategory from "./assets/clothing-category.png";
import KitchenCategory from "./assets/kitchen-category.png";
import BeautyCategory from "./assets/beauty-category.png";
import SportsCategory from "./assets/sports-category.png";
import BooksCategory from "./assets/books-category.png";

export const featuredProducts: Product[] = [
    {
        id: 1,
        name: 'Wireless Headphones',
        price: 149.99,
        image: WirelessEarphones,
        category: 'Electronics',
        rating: 4.5,
        isNew: true,
    },
    {
        id: 2,
        name: 'Smart Watch',
        price: 299.99,
        image: SmartWatch,
        category: 'Electronics',
        rating: 4.8,
    },
    {
        id: 3,
        name: 'Cotton T-Shirt',
        price: 24.99,
        image: MenCottonTshirt,
        category: 'Clothing',
        rating: 4.2,
        discount: 15,
    },
    {
        id: 4,
        name: 'Running Shoes',
        price: 119.99,
        image: RunningShoes,
        category: 'Footwear',
        rating: 4.6,
    },
    {
        id: 5,
        name: 'Ceramic Coffee Mug',
        price: 19.99,
        image: PotteCeramicCoffeeMug,
        category: 'Home',
        rating: 4.4,
        discount: 10,
    },
    {
        id: 6,
        name: 'Leather Wallet',
        price: 49.99,
        image: MenLeatherWallet,
        category: 'Accessories',
        rating: 4.3,
    },
];

export const categories: Category[] = [
    { id: 1, name: 'Electronics', image: ElectronicsCategory },
    { id: 2, name: 'Clothing', image: ClothingCategory },
    {
        id: 3,
        name: 'Home & Kitchen',
        image: KitchenCategory,
    },
    { id: 4, name: 'Beauty', image: BeautyCategory },
    { id: 5, name: 'Sports', image: SportsCategory },
    { id: 6, name: 'Books', image: BooksCategory },
];

export const banners: Banner[] = [
    {
        id: 1,
        title: 'Summer Collection',
        subtitle: '50% OFF on selected items',
        cta: 'Shop Now',
        image: SummerCollection,
        color: 'bg-blue-500',
    },
    {
        id: 2,
        title: 'New Tech Arrivals',
        subtitle: 'Latest gadgets and accessories',
        cta: 'Explore',
        image: NewTechArrivals,
        color: 'bg-purple-500',
    },
    {
        id: 3,
        title: 'Cook with confidence',
        subtitle: 'Premium CookWare Starting at ₹999',
        cta: 'Discover',
        image: CookWithConfidenceCollection,
        color: 'bg-green-500',
    },
];
