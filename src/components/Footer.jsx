import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 
                  text-gray-300 py-8 mt-auto">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-6">
                        <p className="text-sm">Follow me on</p>
                        <a 
                            href="https://github.com/yourusername" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-blue-500 transition duration-300"
                        >
                            GitHub
                        </a>
                        <span className="text-gray-600">|</span>
                        <a 
                            href="https://linkedin.com/in/yourusername" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-blue-500 transition duration-300"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;