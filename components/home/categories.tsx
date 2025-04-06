import React from 'react';
import { categories } from '@/data/index';

import x from '@/data/assets/electronics-category.png';
import Image from 'next/image';

export const CategoriesSection: React.FC = () => {
    return (
        <section className="mb-12">
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold">
                    Shop by Category
                </h2>
                <a
                    href="#all-categories"
                    className="text-sm font-medium text-primary hover:underline"
                >
                    View All
                </a>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {categories.map((category) => (
                    <a
                        key={category.id}
                        href={`#${category.name.toLowerCase()}`}
                        className="group overflow-hidden rounded-lg border bg-background transition-all hover:shadow-md dark:border-gray-800"
                    >
                        <div className="aspect-square overflow-hidden">
                            <Image
                                src={category.image}
                                alt={category.name}
                                width={1000}
                                height={1000}
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-3 text-center font-medium">
                            {category.name}
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};
