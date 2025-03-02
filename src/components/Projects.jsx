import React, { useState, useEffect } from 'react';

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const projectList = [
        {
            title: 'Project One',
            description: 'Description of project one.',
            link: 'https://link-to-project-one.com'
        },
        {
            title: 'Project Two',
            description: 'Description of project two.',
            link: 'https://link-to-project-two.com'
        },
        {
            title: 'Project Three',
            description: 'Description of project three.',
            link: 'https://link-to-project-three.com'
        }
    ];

    const handleNext = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === projectList.length - 1 ? 0 : prevIndex + 1
            );
            setIsAnimating(false);
        }, 300);
    };

    const handlePrev = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === 0 ? projectList.length - 1 : prevIndex - 1
            );
            setIsAnimating(false);
        }, 300);
    };

    useEffect(() => {
        const timer = setInterval(handleNext, 2000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="projects" className="py-20 bg-gradient-to-b from-gray-800 via-blue-900 to-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center text-white mb-12">
                    My Projects
                </h2>
                <div className="flex justify-center items-center gap-4">
                    {/* Previous Button */}
                    <button
                        onClick={handlePrev}
                        className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 
                                 transition-colors duration-300 focus:outline-none 
                                 focus:ring-2 focus:ring-blue-500"
                    >
                        <svg 
                            className="w-6 h-6 text-white" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Project Card */}
                    <div 
                        className={`w-full max-w-md bg-gradient-to-r from-gray-800 via-blue-900/30 to-gray-800 rounded-lg 
                                  shadow-xl overflow-hidden transition-all duration-300 transform
                                  ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
                    >
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-white mb-3">
                                {projectList[currentIndex].title}
                            </h3>
                            <p className="text-gray-300 mb-4">
                                {projectList[currentIndex].description}
                            </p>
                            <a 
                                href={projectList[currentIndex].link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg
                                         hover:bg-blue-700 transition duration-300 transform hover:scale-[1.02]
                                         active:scale-[0.98] focus:outline-none focus:ring-2 
                                         focus:ring-blue-500 focus:ring-opacity-50"
                            >
                                View Project
                            </a>
                        </div>
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={handleNext}
                        className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 
                                 transition-colors duration-300 focus:outline-none 
                                 focus:ring-2 focus:ring-blue-500"
                    >
                        <svg 
                            className="w-6 h-6 text-white" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Project indicators */}
                <div className="flex justify-center space-x-2 mt-6">
                    {projectList.map((_, index) => (
                        <div
                            key={index}
                            className={`h-2 w-2 rounded-full transition-all duration-300
                                      ${currentIndex === index ? 'bg-blue-500 w-4' : 'bg-gray-600'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;