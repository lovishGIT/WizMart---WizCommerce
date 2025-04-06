import React from 'react';
import { Star } from 'lucide-react';

interface RatingProps {
    rating: number;
}

export const Rating: React.FC<RatingProps> = ({ rating }) => {
    return (
        <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    className={`h-4 w-4 ${
                        i < Math.floor(rating)
                            ? 'text-yellow-400 fill-current'
                            : i < rating
                            ? 'text-yellow-400 fill-current opacity-50'
                            : 'text-gray-300 dark:text-gray-600'
                    }`}
                    fill={
                        i < Math.floor(rating)
                            ? 'currentColor'
                            : 'none'
                    }
                />
            ))}
            <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">
                ({rating})
            </span>
        </div>
    );
};
