import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Rating } from '@/components/home/rating';
import { Product } from '@/types';
import Image from 'next/image';

interface ProductCardProps {
    product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({
    product,
}) => {
    return (
        <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="relative">
                <Image
                    src={product.image}
                    alt={product.name}
                    className="h-48 w-full object-cover"
                />
                {product.isNew && (
                    <Badge className="absolute left-2 top-2 bg-blue-500">
                        New
                    </Badge>
                )}
                {product.discount && (
                    <Badge className="absolute right-2 top-2 bg-red-500">
                        {product.discount}% OFF
                    </Badge>
                )}
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-12 rounded-full bg-white/80 text-gray-700 hover:bg-white hover:text-pink-500 dark:bg-gray-800/80 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-pink-400"
                >
                    <Heart className="h-5 w-5" />
                </Button>
            </div>
            <CardContent className="p-4">
                <div className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                    {product.category}
                </div>
                <h3 className="mb-1 line-clamp-1 font-medium">
                    {product.name}
                </h3>
                <Rating rating={product.rating} />
                <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center">
                        {product.discount ? (
                            <>
                                <span className="font-bold">
                                    $
                                    {(
                                        product.price *
                                        (1 - product.discount / 100)
                                    ).toFixed(2)}
                                </span>
                                <span className="ml-2 text-sm text-gray-500 line-through dark:text-gray-400">
                                    ${product.price.toFixed(2)}
                                </span>
                            </>
                        ) : (
                            <span className="font-bold">
                                ${product.price.toFixed(2)}
                            </span>
                        )}
                    </div>
                    <Button size="sm" variant="secondary">
                        <ShoppingCart className="mr-1 h-4 w-4" />
                        Add
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};
