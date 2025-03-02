import React, { useState, useEffect } from 'react';
import ShashiPhoto from "../image/ShashiPic.png";

const About = () => {
    const [text, setText] = useState('');
    const [nameText, setNameText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);
    const [nameTyped, setNameTyped] = useState(false);

    const name = "Shashi Shankar";
    const textArray = [
        'Full Stack Developer',
        'Data Structures & Algorithms',
        'Problem Solver',
        'UI/UX Designer'
    ];

    // Effect for typing name
    useEffect(() => {
        if (nameTyped) return;
        
        const typeNameTimer = setTimeout(() => {
            if (nameText.length < name.length) {
                setNameText(name.substring(0, nameText.length + 1));
            } else {
                setNameTyped(true);
            }
        }, 150);

        return () => clearTimeout(typeNameTimer);
    }, [nameText, nameTyped]);

    // Existing typing effect for roles
    useEffect(() => {
        if (!nameTyped) return;

        const handleTyping = () => {
            const i = loopNum % textArray.length;
            const fullText = textArray[i];

            setText(isDeleting 
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 100 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed, nameTyped]);

    return (
        <section id="about" className="py-20 bg-gradient-to-b from-gray-900 via-blue-900 to-gray-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center text-white mb-12 
                             animate-fade-in-down">
                    About Me
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 
                                      rounded-lg blur opacity-75 group-hover:opacity-100 transition 
                                      duration-1000 group-hover:duration-200"></div>
                        <div className="relative">
                            <img 
                                src={ShashiPhoto} // Use the imported variable instead of relative path
                                alt="Professional headshot"
                                className="rounded-lg w-full object-cover shadow-2xl 
                                         transform transition duration-500 hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-6">
                        <div className="bg-gradient-to-r from-gray-800 via-blue-900/30 to-gray-800 rounded-lg 
                                      shadow-xl p-8 backdrop-blur-sm bg-opacity-50 transform 
                                      transition duration-500 hover:-translate-y-1 hover:shadow-2xl">
                            <h3 className="text-2xl font-semibold text-blue-400 mb-4">
                                Hello, I'm
                            </h3>
                            <div className="h-20">
                                <p className="text-gray-300 text-3xl font-bold mb-6 leading-relaxed">
                                    {nameText}
                                    <span className="animate-pulse">|</span>
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-800 via-blue-900/30 to-gray-800 rounded-lg 
                                      shadow-xl p-8 backdrop-blur-sm bg-opacity-50 transform 
                                      transition duration-500 hover:-translate-y-1 hover:shadow-2xl">
                            <h3 className="text-2xl font-semibold text-green-400 mb-4">
                                I am a
                            </h3>
                            <div className="h-20"> {/* Fixed height container for typing text */}
                                <p className="text-gray-300 text-2xl font-bold mb-6 leading-relaxed">
                                    {text}
                                    <span className="animate-pulse">|</span>
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-800 via-blue-900/30 to-gray-800 rounded-lg 
                                      shadow-xl p-8 backdrop-blur-sm bg-opacity-50 transform 
                                      transition duration-500 hover:-translate-y-1 hover:shadow-2xl">
                            <h3 className="text-2xl font-semibold text-purple-400 mb-4">
                                What I Do
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                I enjoy learning new skills and continuously improving my craft. 
                                In this portfolio, you will find some of the projects I have 
                                worked on.
                            </p>
                            
                            {/* Skills Section */}
                            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {['React', 'Node.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Git'].map((skill) => (
                                    <span 
                                        key={skill}
                                        className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full 
                                                 text-sm font-medium inline-block text-center
                                                 transform transition duration-300 hover:scale-105
                                                 hover:bg-gray-600"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;