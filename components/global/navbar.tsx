import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import {
    ShoppingCart,
    Heart,
    User,
    Search,
    Menu,
    X,
    ChevronDown,
    Moon,
    Sun
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
} from '@/components/ui/sheet';
import { categories } from '@/data/index';

export const Header: React.FC = () => {
    const { theme, setTheme } = useTheme();
    const [searchQuery, setSearchQuery] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () =>
            window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${
                isScrolled ? 'shadow-md backdrop-blur-sm' : ''
            } ${
                theme === 'dark'
                    ? 'bg-black text-white border-gray-800'
                    : 'bg-white text-black border-gray-200'
            }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Mobile Menu */}
                    <Sheet
                        open={mobileMenuOpen}
                        onOpenChange={setMobileMenuOpen}
                    >
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="md:hidden"
                                aria-label="Menu"
                            >
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side="left"
                            className={`w-[80%] sm:w-[350px] ${
                                theme === 'dark'
                                    ? 'bg-black text-white border-gray-800'
                                    : 'bg-white text-black border-gray-200'
                            }`}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-xl font-bold">
                                    WizMart
                                </span>
                                <SheetClose asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        aria-label="Close"
                                    >
                                        <X className="h-5 w-5" />
                                    </Button>
                                </SheetClose>
                            </div>

                            <nav className="flex flex-col gap-2">
                                {categories.map((category) => (
                                    <a
                                        key={category.id}
                                        href={`#${category.name.toLowerCase()}`}
                                        className={`px-2 py-3 rounded-md flex items-center justify-between hover:bg-opacity-10 transition-colors ${
                                            theme === 'dark'
                                                ? 'hover:bg-white'
                                                : 'hover:bg-black'
                                        }`}
                                        onClick={() =>
                                            setMobileMenuOpen(false)
                                        }
                                    >
                                        <span>{category.name}</span>
                                        <ChevronDown className="h-4 w-4" />
                                    </a>
                                ))}
                            </nav>

                            <div className="mt-8 space-y-4">
                                <div className="relative w-full">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                    <Input
                                        className="w-full pl-9 rounded-full"
                                        placeholder="Search products..."
                                        value={searchQuery}
                                        onChange={(e) =>
                                            setSearchQuery(
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>

                                <div className="flex flex-col gap-3 mt-6">
                                    <Button
                                        variant="outline"
                                        className="w-full justify-start"
                                    >
                                        <User className="mr-2 h-4 w-4" />{' '}
                                        My Account
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="w-full justify-start"
                                    >
                                        <Heart className="mr-2 h-4 w-4" />{' '}
                                        Wishlist
                                        <Badge className="ml-auto bg-primary">
                                            3
                                        </Badge>
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="w-full justify-start"
                                    >
                                        <ShoppingCart className="mr-2 h-4 w-4" />{' '}
                                        Cart
                                        <Badge className="ml-auto bg-primary">
                                            2
                                        </Badge>
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>

                    <a href="#" className="flex items-center">
                        <span className="text-xl font-bold md:text-2xl">
                            WizMart
                        </span>
                    </a>

                    <nav className="hidden md:flex md:items-center md:gap-6">
                        {categories.slice(0, 5).map((category) => (
                            <div
                                key={category.id}
                                className="relative group"
                            >
                                <a
                                    href={`#${category.name.toLowerCase()}`}
                                    className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary"
                                >
                                    {category.name}
                                    <ChevronDown className="h-3 w-3" />
                                </a>
                                <div
                                    className={`absolute left-0 top-full mt-1 w-48 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ${
                                        theme === 'dark'
                                            ? 'bg-black border border-gray-800'
                                            : 'bg-white border border-gray-200 shadow-lg'
                                    }`}
                                >
                                    <div className="p-2">
                                        {/* Example subcategories - you would replace with actual data */}
                                        {[1, 2, 3].map((item) => (
                                            <a
                                                key={item}
                                                href="#"
                                                className={`block px-3 py-2 text-sm rounded-md ${
                                                    theme === 'dark'
                                                        ? 'hover:bg-gray-900'
                                                        : 'hover:bg-gray-100'
                                                }`}
                                            >
                                                {category.name}{' '}
                                                Subcategory {item}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </nav>

                    {/* Actions Bar */}
                    <div className="flex items-center gap-2 md:gap-4">
                        {/* Search - Desktop */}
                        <div className="relative hidden md:block">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                                className="w-48 rounded-full pl-9 lg:w-64 focus:w-72 transition-all"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) =>
                                    setSearchQuery(e.target.value)
                                }
                            />
                        </div>

                        {/* Theme Toggle */}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() =>
                                setTheme(
                                    theme === 'dark'
                                        ? 'light'
                                        : 'dark'
                                )
                            }
                            className="rounded-full"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? (
                                <Sun className="h-5 w-5" />
                            ) : (
                                <Moon className="h-5 w-5" />
                            )}
                        </Button>

                        {/* User Actions - Desktop */}
                        <div className="hidden md:flex md:items-center md:gap-2">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full"
                            >
                                <User className="h-5 w-5" />
                            </Button>

                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full"
                            >
                                <div className="relative">
                                    <Heart className="h-5 w-5" />
                                    <Badge className="absolute -right-1 -top-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                                        3
                                    </Badge>
                                </div>
                            </Button>
                        </div>

                        {/* Cart - Both Mobile and Desktop */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full"
                        >
                            <div className="relative">
                                <ShoppingCart className="h-5 w-5" />
                                <Badge className="absolute -right-1 -top-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                                    2
                                </Badge>
                            </div>
                        </Button>

                        {/* Mobile Search Trigger */}
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="rounded-full md:hidden"
                                >
                                    <Search className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent
                                side="top"
                                className={`h-28 ${
                                    theme === 'dark'
                                        ? 'bg-black text-white border-gray-800'
                                        : 'bg-white text-black border-gray-200'
                                }`}
                            >
                                <div className="flex h-full items-center justify-center p-4">
                                    <div className="relative w-full max-w-md">
                                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                                        <Input
                                            className="w-full pl-9 rounded-full"
                                            placeholder="Search products..."
                                            value={searchQuery}
                                            onChange={(e) =>
                                                setSearchQuery(
                                                    e.target.value
                                                )
                                            }
                                            autoFocus
                                        />
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
};
