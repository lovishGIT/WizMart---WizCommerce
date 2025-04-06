import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const PromotionBanner: React.FC = () => {
    return (
        <section className="mb-12">
            <div className="relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="flex flex-col justify-center p-8 md:p-12">
                        <h2 className="mb-4 text-3xl font-bold">
                            Special Offer
                        </h2>
                        <p className="mb-6 text-lg opacity-90">
                            Get 20% off on your first order. Use code{' '}
                            <span className="font-bold">
                                WELCOME20
                            </span>{' '}
                            at checkout.
                        </p>
                        <Button className="w-fit">
                            Shop Now
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                    <div className="hidden overflow-hidden md:block">
                        <img
                            src="/api/placeholder/800/600"
                            alt="Special Offer"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
