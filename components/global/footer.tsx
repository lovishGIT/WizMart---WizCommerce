'use client';
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="border-t bg-background">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div>
                        <h3 className="mb-4 text-lg font-bold">
                            WizMart
                        </h3>
                        <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                            Your one-stop shop for all your shopping
                            needs. Quality products at affordable
                            prices.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="text-gray-500 hover:text-primary dark:text-gray-400"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                className="text-gray-500 hover:text-primary dark:text-gray-400"
                            >
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                className="text-gray-500 hover:text-primary dark:text-gray-400"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                className="text-gray-500 hover:text-primary dark:text-gray-400"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-bold">
                            Shop
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-primary"
                                >
                                    All Products
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-primary"
                                >
                                    New Arrivals
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-primary"
                                >
                                    Best Sellers
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-primary"
                                >
                                    Sale Items
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-bold">
                            Customer Service
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-primary"
                                >
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-primary"
                                >
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-primary"
                                >
                                    Shipping & Returns
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-primary"
                                >
                                    Track Order
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-bold">
                            Contact
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>Rajpura, Punjab, India</li>
                            <li>lovishbansal@gmail.com</li>
                            <li>79733-90266</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t pt-6 text-center text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400">
                    © {new Date().getFullYear()} WizMart. All rights
                    reserved.
                </div>
            </div>
        </footer>
    );
};
