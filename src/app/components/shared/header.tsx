"use client"
// Import React and Next.js components
import React from "react";
import Image from "next/image";
import logo from '../../../../public/next.svg';
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi';
import { useState } from 'react';


// Define the Header component
const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <header className="bg-white p-4 border-b border-gray-200">
            {/* Top info - hidden on mobile */}
            <div className="container mx-auto hidden md:flex justify-around items-center">
                <div className="flex items-center space-x-4">
                    <Image
                        src={logo}
                        alt="Address pin"
                        width={16}
                        height={16}
                        className="text-orange-500"
                    />
                    <span className="text-sm text-orange-500">
                        145 Cửa hàng khắp cả nước
                    </span>
                </div>
                <div className="flex items-center space-x-4">
                    <Image
                        src={logo}
                        alt="Phone icon"
                        width={16}
                        height={16}
                        className="text-orange-500"
                    />
                    <span className="text-sm text-orange-500">Đặt hàng: 1800.6936</span>
                </div>
            </div>
            <div className="flex justify-between items-center bg-beige py-4 px-8">
                <div className="flex items-center">
                    <Image src={logo} alt="Logo" width={80} height={40} />
                    <h1 className="ml-2 text-2xl font-bold">THE COFFEE HOUSE</h1>
                </div>
                <nav className="hidden md:flex space-x-4">
                    <a className="text-lg font-medium hover:text-orange-500">Cà phê</a>
                    <a className="text-lg font-medium hover:text-orange-500">Trà</a>
                    <a className="text-lg font-medium hover:text-orange-500">Cửa hàng</a>
                    <a className="text-lg font-medium hover:text-orange-500">Tuyển dụng</a>
                </nav>

                {/* Mobile menu toggle */}
                <HiMenu
                    className="w-8 h-8 md:hidden cursor-pointer"
                    onClick={() => setOpen(true)}
                />

                {/* Mobile sidebar */}
                {open && (
                    <div className="fixed inset-0 flex">
                        <div className="bg-white w-80 h-full overflow-auto">
                            <div className="p-4 flex justify-end">
                                <HiX
                                    className="w-6 h-6 cursor-pointer"
                                    onClick={() => setOpen(false)}
                                />
                            </div>
                            <nav className="flex flex-col space-y-4 p-4">
                                <a className="text-lg font-medium hover:text-orange-500">Cà phê</a>
                                <a className="text-lg font-medium hover:text-orange-500">Trà</a>
                                <a className="text-lg font-medium hover:text-orange-500">Cửa hàng</a>
                                <a className="text-lg font-medium hover:text-orange-500">Tuyển dụng</a>
                            </nav>
                        </div>
                    </div>
                )}

            </div>
        </header>
    );
};

// Export the Header component
export default Header;
