import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="bg-white/90 py-4 px-8 fixed top-8 left-6 right-6 z-10 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                <div className="md:hidden">
                    <a
                        href="#contact"
                        className="px-4 py-2 bg-gray-600 text-white flex items-center hover:bg-gray-800"
                    >
                        Contact Us
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                </div>

                <div className="md:hidden ml-auto">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-600 hover:text-gray-800"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                <div className="hidden md:flex items-center space-x-6">
                    <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
                    <a href="#news" className="text-gray-700 hover:text-blue-600">News</a>
                    <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
                    <a href="#team" className="text-gray-700 hover:text-blue-600">Our Team</a>
                    <a href="#enquiry" className="text-gray-700 hover:text-blue-600">Make Enquiry</a>
                </div>

                <div className="hidden md:block ml-auto">
                    <a
                        href="#contact"
                        className="px-4 py-2 bg-gray-600 text-white flex items-center hover:bg-gray-800"
                    >
                        Contact Us
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                </div>
            </div>

            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white md:hidden shadow-lg z-10">
                    <div className="flex flex-col items-center space-y-4 p-4">
                        <a href="#about" onClick={closeMenu} className="text-gray-700 hover:text-blue-600">About</a>
                        <a href="#news" onClick={closeMenu} className="text-gray-700 hover:text-blue-600">News</a>
                        <a href="#services" onClick={closeMenu} className="text-gray-700 hover:text-blue-600">Services</a>
                        <a href="#team" onClick={closeMenu} className="text-gray-700 hover:text-blue-600">Our Team</a>
                        <a href="#enquiry" onClick={closeMenu} className="text-gray-700 hover:text-blue-600">Make Enquiry</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
