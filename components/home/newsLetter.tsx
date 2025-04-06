import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const Newsletter: React.FC = () => {
    return (
        <section className="mb-12 rounded-lg bg-primary p-8 text-primary-foreground">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="mb-4 text-2xl font-bold">
                    Subscribe to Our Newsletter
                </h2>
                <p className="mb-6 opacity-90">
                    Get updates on new products, sales, and exclusive
                    offers.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <Input
                        type="email"
                        placeholder="Your email address"
                        className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/70"
                    />
                    <Button variant="secondary" className="shrink-0">
                        Subscribe
                    </Button>
                </div>
            </div>
        </section>
    );
};
