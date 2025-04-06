import React, { useState, useCallback, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from '@/components/ui/carousel';
import { banners } from '@/data/index';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export const HeroBanner: React.FC = () => {
    const { theme } = useTheme();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [carouselApi, setCarouselApi] = useState<CarouselApi>();
    const totalSlides = banners.length;

    // Store the carousel API when it becomes available
    const onApiChange = useCallback((api: CarouselApi | null) => {
        if (api) {
            setCarouselApi(api);
        }
    }, []);

    // Update current index when slide changes
    useEffect(() => {
        if (!carouselApi) return;

        const handleSelect = () => {
            setCurrentIndex(carouselApi.selectedScrollSnap());
        };

        carouselApi.on('select', handleSelect);

        // Set initial index
        handleSelect();

        return () => {
            carouselApi.off('select', handleSelect);
        };
    }, [carouselApi]);

    // Set up autoplay
    useEffect(() => {
        if (!carouselApi) return;

        // Autoplay interval in ms (2 seconds)
        const autoplayInterval = 2000;

        const autoplayTimer = setInterval(() => {
            carouselApi.scrollNext();
        }, autoplayInterval);

        // Clean up timer when component unmounts
        return () => {
            clearInterval(autoplayTimer);
        };
    }, [carouselApi]);

    return (
        <section className="mb-12 relative">
            <Carousel
                className="w-full"
                opts={{
                    loop: true,
                }}
                setApi={onApiChange}
            >
                <CarouselContent>
                    {banners.map((banner, index) => (
                        <CarouselItem key={banner.id}>
                            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 md:h-96">
                                <Image
                                    src={banner.image}
                                    alt={banner.title}
                                    className="h-full w-full object-cover"
                                    width={1200}
                                    height={600}
                                    priority={index === 0}
                                />
                                {/* Dark overlay instead of colored gradient for better compatibility */}
                                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent">
                                    <div className="flex h-full flex-col justify-center p-6 md:p-8 text-white md:w-1/2">
                                        <h2 className="mb-2 text-2xl font-bold md:text-4xl lg:text-5xl">
                                            {banner.title}
                                        </h2>
                                        <p className="mb-4 md:mb-6 text-sm md:text-lg opacity-90">
                                            {banner.subtitle}
                                        </p>
                                        <Button
                                            className={`w-fit ${
                                                theme === 'dark'
                                                    ? 'bg-white text-black hover:bg-gray-200'
                                                    : 'bg-black text-white hover:bg-gray-800'
                                            }`}
                                        >
                                            {banner.cta}
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Pagination dots */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                    {Array.from({ length: totalSlides }).map(
                        (_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    if (carouselApi)
                                        carouselApi.scrollTo(index);
                                }}
                                className={`h-2 rounded-full transition-all ${
                                    currentIndex === index
                                        ? 'w-6 bg-white'
                                        : 'w-2 bg-white/50 hover:bg-white/70'
                                }`}
                                aria-label={`Go to slide ${
                                    index + 1
                                }`}
                            />
                        )
                    )}
                </div>
            </Carousel>

            {/* Current slide indicator */}
            <div className="mt-2 text-center text-sm text-gray-500">
                <span className="font-medium">
                    {currentIndex + 1}
                </span>{' '}
                / {totalSlides}
            </div>
        </section>
    );
};
