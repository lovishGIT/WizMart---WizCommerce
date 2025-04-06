'use client';

import React from 'react';
import { Header } from '@/components/global/navbar';
import { HeroBanner } from '@/components/home/heroBanner';
import { CategoriesSection } from '@/components/home/categories';
import { FeaturedProducts } from '@/components/home/featuredProduct';
import { PromotionBanner } from '@/components/home/promotionBanner';
import { Newsletter } from '@/components/home/newsLetter';
import { Footer } from '@/components/global/footer';

export default function Home() {
    return (
        <div className="min-h-screen">
            <Header />
            <main className="container mx-auto px-4 py-6">
                <HeroBanner />
                <CategoriesSection />
                <FeaturedProducts />
                <PromotionBanner />
                <Newsletter />
            </main>
            <Footer />
        </div>
    );
}
