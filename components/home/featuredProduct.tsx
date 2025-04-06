import React from 'react';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from '@/components/ui/tabs';
import { ProductCard } from '@/components/home/productCard';
import { featuredProducts } from '@/data/index';

export const FeaturedProducts: React.FC = () => {
    return (
        <section className="mb-12">
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold">
                    Featured Products
                </h2>
                <a
                    href="#all-products"
                    className="text-sm font-medium text-primary hover:underline"
                >
                    View All
                </a>
            </div>

            <Tabs defaultValue="all" className="w-full">
                <TabsList className="mb-6 flex w-full overflow-x-auto justify-start gap-2 sm:justify-center">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="new">
                        New Arrivals
                    </TabsTrigger>
                    <TabsTrigger value="bestsellers">
                        Bestsellers
                    </TabsTrigger>
                    <TabsTrigger value="sale">On Sale</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="mt-0">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {featuredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="new" className="mt-0">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {featuredProducts
                            .filter((p) => p.isNew)
                            .map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                    </div>
                </TabsContent>
                <TabsContent value="bestsellers" className="mt-0">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {featuredProducts
                            .filter((p) => p.rating >= 4.5)
                            .map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                    </div>
                </TabsContent>
                <TabsContent value="sale" className="mt-0">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {featuredProducts
                            .filter((p) => p.discount)
                            .map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                    </div>
                </TabsContent>
            </Tabs>
        </section>
    );
};
