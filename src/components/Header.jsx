import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const codeProfiles = [
        {
            name: 'LeetCode',
            link: 'https://leetcode.com/your-username',
            className: 'text-yellow-500 hover:text-yellow-400'
        },
        {
            name: 'CodeForces',
            link: 'https://codeforces.com/profile/your-username',
            className: 'text-blue-500 hover:text-blue-400'
        },
        {
            name: 'CodeChef',
            link: 'https://www.codechef.com/users/your-username',
            className: 'text-brown-500 hover:text-brown-400'
        }
    ];

    return (
        <header className="fixed w-full bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 
                          bg-opacity-90 backdrop-blur-sm shadow-lg z-50">
            <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Desktop Navigation - Left Side */}
                    <ul className="hidden md:flex space-x-8">
                        <li>
                            <a href="#about" className="text-gray-300 hover:text-white transition duration-300">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="text-gray-300 hover:text-white transition duration-300">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="text-gray-300 hover:text-white transition duration-300">
                                Contact
                            </a>
                        </li>
                    </ul>

                    {/* Coding Profiles - Right Side */}
                    <div className="hidden md:flex items-center space-x-6">
                        {codeProfiles.map((profile, index) => (
                            <a
                                key={index}
                                href={profile.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${profile.className} transition duration-300`}
                            >
                                {profile.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden text-gray-300 hover:text-white focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <ul className="md:hidden py-4 space-y-4">
                        <li>
                            <a 
                                href="#about" 
                                className="block text-gray-300 hover:text-white transition duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#projects" 
                                className="block text-gray-300 hover:text-white transition duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#contact" 
                                className="block text-gray-300 hover:text-white transition duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </a>
                        </li>
                        {/* Mobile Coding Profiles */}
                        {codeProfiles.map((profile, index) => (
                            <li key={index}>
                                <a
                                    href={profile.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`block ${profile.className} transition duration-300`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {profile.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </nav>
        </header>
    );
};

export default Header;